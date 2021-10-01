pragma solidity >=0.6.0 <0.9.0;

import './interfaces/IRainbowStake.sol';
import './RainbowERC20.sol';
import './libraries/Math.sol';
import './interfaces/IERC20.sol';
import './interfaces/IRainbowFactory.sol';
import './interfaces/IRainbowCallee.sol';

contract RainbowStake is IRainbowStake, RainbowERC20 {
    using SafeMath for uint;

    uint public constant MINIMUM_LIQUIDITY = 10**3;
    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

    address public override factory;
    address public override token0;

    uint    private reserve0;           // uses single storage slot, accessible via getReserves
    uint32  private blockTimestampLast; // uses single storage slot, accessible via getReserves

    uint private unlocked = 1;
    modifier lock() {
        require(unlocked == 1, 'RainbowFaucet: LOCKED');
        unlocked = 0;
        _;
        unlocked = 1;
    }

    constructor() public {
        factory = msg.sender;
    }

    // called once by the factory at time of deployment
    function initialize(address _token0) external override {
        require(msg.sender == factory, 'RainbowFaucet: FORBIDDEN'); // sufficient check
        token0 = _token0;
    }

    function _safeTransfer(address token, address to, uint value) private {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'RainbowFaucet: TRANSFER_FAILED');
    }

    function getReserve() public view override returns (uint _reserve0) {
        _reserve0 = reserve0;
    }

    // update reserves and, on the first call per block, price accumulators
    function _update(uint balance0) private {
        require(balance0 <= 2**256 - 1, "RainbowStake: OVERFLOW");
        reserve0 = balance0;
        emit Sync(reserve0);
    }

    // this low-level function should be called from a contract which performs important safety checks
    function mint(address to) external lock override returns (uint) {
        // Fetch amount actually received from Router transfer()
        uint _balance0 = IERC20(token0).balanceOf(address(this));
        uint _reserve = getReserve();
        uint _liquidity = _balance0.sub(_reserve);
        require(_liquidity > 0, 'RainbowStake: INSUFFICIENT_LIQUIDITY_MINTED');

        _mint(to, _liquidity);
        _update(_reserve.add(_liquidity)); // Update reserve only by minted amount

        emit Mint(msg.sender, _balance0);
        return _liquidity;
    }

    // this low-level function should be called from a contract which performs important safety checks
    function burn(address to) external lock override returns (uint amount0) {
        require(getReserve() > 0, 'UniFaucet: CANNOT_BURN_NO_LIQUIDITY');
        address _token0   = token0;
        uint _balance0    = IERC20(_token0).balanceOf(address(this)); // Of Tokens
        uint _totalSupply = getReserve();          // Of Liquidity
        uint liquidity    = balanceOf[address(this)]; // Num LP Tokens
        uint amount0      = liquidity.mul(_balance0) / _totalSupply; // Share of Tokens including reflection
        require(_balance0 > 0, 'UniFaucet: INSUFFICIENT_LIQUIDITY_BURNED');

        _burn(address(this), liquidity);
        _safeTransfer(_token0, to, amount0);

        uint _reserve = getReserve();
        _update(_reserve.sub(liquidity));
        emit Burn(msg.sender, amount0, to);
    }

    function drip(address to, uint amount) external override {
        uint _balance = IERC20(token0).balanceOf(address(this)); // Should be more than staked amount
        uint reflection = _balance.sub(getReserve());
        require(reflection > 0, "UniFaucet: NO REFLECTION AVAILABLE");
        amount = reflection.mul(1) / 100;

        IERC20(token0).transfer(to, amount);
    }
}
