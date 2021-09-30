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
    function addLiquidity(address tokenA, uint amountA, address to) external virtual override returns (uint liquidity) {
        _addLiquidity(tokenA);
        // See Optimiziation:  https://github.com/Uniswap/v2-periphery/blob/dda62473e2da448bc9cb8f4514dadda4aeede5f4/contracts/libraries/UniswapV2Library.sol#L18
        address stake = IRainbowFactory(factory).getStake(tokenA);
        require(stake != address(0), "UniFaucet: STAKE DOES NOT EXIST");

        TransferHelper.safeTransferFrom(tokenA, msg.sender, stake, amountA);
        liquidity = IRainbowStake(stake).mint(to);
    }

    // **** REMOVE LIQUIDITY ****
    function removeLiquidity(address tokenA, uint liquidity, address to) public override returns (uint amountA) {
        address stake = IRainbowFactory(factory).getStake(tokenA);
        RainbowStake(stake).transferFrom(msg.sender, stake, liquidity); // send liquidity to pair
        amountA = RainbowStake(stake).burn(to);
    }

    // Require fee on use
    function drip(address token, address to) public returns (uint amount) {
        address stake = IRainbowFactory(factory).getStake(token);
        uint balance = IERC20(token).balanceOf(stake); // Should be more than staked amount
        uint reflection = balance.sub(IRainbowStake(stake).getReserve());
        require(reflection > 0, "UniFaucet: NO REFLECTION AVAILABLE");
        amount = reflection.mul(1) / 100;

        IRainbowStake(stake).drip(to, amount);
    }
}
