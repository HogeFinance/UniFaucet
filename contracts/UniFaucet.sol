pragma solidity >=0.6.0 <0.9.0;

import './libraries/TransferHelper.sol';
import './interfaces/IRainbowFactory.sol';
import './interfaces/IUniFaucet.sol';
import './interfaces/IRainbowStake.sol';
import './RainbowStake.sol';
import './interfaces/IRainbowERC20.sol';
import './interfaces/IERC20.sol';
import './libraries/SafeMath.sol';

contract UniFaucet is IUniFaucet {
    using SafeMath for uint;

    address public immutable override factory;
    address public immutable feeTo; // Where to send the fees
    uint public immutable feeAmount;

    constructor(address _factory, address _feeTo, uint _feeAmount) {
        factory = _factory;
        feeTo   = _feeTo;
        feeAmount = _feeAmount;
    }

    function createLiquidityStake(address tokenA) public returns (address) {
        address stake = IRainbowFactory(factory).getStake(tokenA);
        require(stake == address(0), "UniFaucet: STAKE ALREADY EXISTS");
        stake = IRainbowFactory(factory).createStake(tokenA);
        return stake;
    }

    // **** REMOVE LIQUIDITY ****
    function removeLiquidity(address tokenA, uint liquidity, address to) public override returns (uint amountA) {
        address stake = IRainbowFactory(factory).getStake(tokenA);

        RainbowStake(stake).transferFrom(msg.sender, stake, liquidity); // send liquidity to pair for burning
        amountA = RainbowStake(stake).burn(to);
    }

    // Require fee on use
    function drip(address token, address to) public payable override returns (uint amount) {
        require(msg.value >= feeAmount, "Must send Wei");

        address stake = IRainbowFactory(factory).getStake(token);
        IRainbowStake(stake).drip(to, amount);
        TransferHelper.safeTransferETH(feeTo, msg.value);
    }

    function getAvailableSpend(address token) public view override returns (uint spend) {
        address stake = IRainbowFactory(factory).getStake(token);
        require(stake != address(0), "UniFaucet: STAKE_DOES_NOT_EXIST");

        uint _totalSupply = IERC20(token).balanceOf(stake);
        uint _reserves = IRainbowStake(stake).getReserve();
        spend = _totalSupply.sub(_reserves);
    }
}
