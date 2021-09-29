pragma solidity >=0.6.0 <0.9.0;

import './interfaces/IRainbowStake.sol';
import './RainbowERC20.sol';
import './libraries/Math.sol';
//import './libraries/UQ112x112.sol';
import './interfaces/IERC20.sol';
import './interfaces/IRainbowFactory.sol';
import './interfaces/IRainbowCallee.sol';

contract RainbowStake is IRainbowStake, RainbowERC20 {
    using SafeMath for uint;
//    using UQ112x112 for uint224;

    uint public constant MINIMUM_LIQUIDITY = 10**3;
    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

    address public override factory;
    address public override token0;

    uint112 private reserve0;           // uses single storage slot, accessible via getReserves
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

    function getReserves() public view returns (uint112 _reserve0, uint32 _blockTimestampLast) {
        _reserve0 = reserve0;
        _blockTimestampLast = blockTimestampLast;
    }

    function _safeTransfer(address token, address to, uint value) private {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'RainbowFaucet: TRANSFER_FAILED');
    }

    function transferLiquidity(address from, address to, uint value) external override returns (bool) {
        return RainbowERC20(this).transferFrom(from, to, value);
    }

    // update reserves and, on the first call per block, price accumulators
    function _update(uint balance0, uint112 _reserve0) private {
        require(balance0 <= 2**256 - 1, "RainbowStake: OVERFLOW");
        uint32 blockTimestamp = uint32(block.timestamp % 2**32);
        uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired
        reserve0 = uint112(balance0);
        blockTimestampLast = blockTimestamp;
        emit Sync(reserve0);
    }

    // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)
//    function _mintFee(uint112 _reserve0, uint112 _reserve1) private returns (bool feeOn) {
//        address feeTo = IUniswapV2Factory(factory).feeTo();
//        feeOn = feeTo != address(0);
//        uint _kLast = kLast; // gas savings
//        if (feeOn) {
//            if (_kLast != 0) {
//                uint rootK = Math.sqrt(uint(_reserve0).mul(_reserve1));
//                uint rootKLast = Math.sqrt(_kLast);
//                if (rootK > rootKLast) {
//                    uint numerator = totalSupply.mul(rootK.sub(rootKLast));
//                    uint denominator = rootK.mul(5).add(rootKLast);
//                    uint liquidity = numerator / denominator;
//                    if (liquidity > 0) _mint(feeTo, liquidity);
//                }
//            }
//        } else if (_kLast != 0) {
//            kLast = 0;
//        }
//    }

    // this low-level function should be called from a contract which performs important safety checks
    function mint(address to) external lock override returns (uint liquidity) {
        // Fetch amount actually received from Router transfer()
        uint balance0 = IERC20(token0).balanceOf(address(this));
        uint liquidity = balance0.sub(reserve0);

        require(liquidity > 0, 'RainbowStake: INSUFFICIENT_LIQUIDITY_MINTED');
        _mint(to, liquidity);
        _update(liquidity, reserve0); // Update reserve only by minted amount
        emit Mint(msg.sender, balance0);
    }

    // this low-level function should be called from a contract which performs important safety checks
    function burn(address to) external lock override returns (uint amount0) {
        address _token0 = token0;                                // gas savings
        uint balance0 = IERC20(_token0).balanceOf(address(this));
        uint liquidity = balanceOf[address(this)];

        require(balance0 > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_BURNED');
        _burn(address(this), liquidity);
        _safeTransfer(_token0, to, balance0);
        balance0 = IERC20(_token0).balanceOf(address(this));

        _update(balance0, reserve0);
        emit Burn(msg.sender, amount0, to);
    }
}
