pragma solidity >=0.6.0 <0.9.0;

import './libraries/TransferHelper.sol';
import './interfaces/IRainbowFactory.sol';
import './interfaces/IUniFaucet.sol';
import './interfaces/IRainbowStake.sol';
import './interfaces/IRainbowERC20.sol';
import './libraries/SafeMath.sol';

contract UniFaucet is IUniFaucet {
    address public immutable override factory;

    constructor(address _factory) public {
        factory = _factory;
    }

    // **** ADD LIQUIDITY ****
    function _addLiquidity(
        address tokenA
    ) private {
        // create the pair if it doesn't exist yet
        if (IRainbowFactory(factory).getStake(tokenA) == address(0)) {
            IRainbowFactory(factory).createStake(tokenA);
        }
    }
    function addLiquidity(address tokenA, uint amountA, address to, uint deadline) external virtual override
      returns (uint liquidity) {
        // ensure(deadline) in method head removed
        _addLiquidity(tokenA);
        // See Optimiziation:  https://github.com/Uniswap/v2-periphery/blob/dda62473e2da448bc9cb8f4514dadda4aeede5f4/contracts/libraries/UniswapV2Library.sol#L18
        address stake = IRainbowFactory(factory).getStake(tokenA);
        require(stake != address(0), "UniFaucet: STAKE DOES NOT EXIST");

        TransferHelper.safeTransferFrom(tokenA, msg.sender, stake, amountA);
        liquidity = IRainbowStake(stake).mint(to);
    }

    // **** REMOVE LIQUIDITY ****
    function removeLiquidity(address tokenA, uint liquidity, address to, uint deadline)
      public override returns (uint amountA) {
        address stake = IRainbowFactory(factory).getStake(tokenA);
        IRainbowStake(stake).transferLiquidity(msg.sender, stake, liquidity); // send liquidity to pair || sketch
        amountA = IRainbowStake(stake).burn(to);
    }

    function drip(address token, address to) public returns (amount) {
        address stake = IRainbowFactory(factory).getStake(token);
        uint balance = IERC20(token).balanceOf(stake); // Should be more than staked amount
        reflection = balance.sub(IRainbowStake(stake).getReserve());
        require(reflect > 0, "UniFaucet: NO REFLECTION AVAILABLE");
        // Require fee on use

        // Transfer % of reflection
        // TODO-make % configurable
        amount = reflection.mul(5).div(100);
        // Approve first here
        IERC20(token).transferFrom(stake, to, amount);
    }
}
