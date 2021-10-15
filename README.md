# [UniFaucet]
A faucet for reflect tokens.

https://www.unifaucet.org

## Maintainer
UniFaucet is a DeFi tool maintained by the Hoge Finance community. Direct all questions, bugs, and concerns to the issues section: 
https://github.com/HogeFinance/UniFaucet/issues

## Using the Faucet
### As a Liquidity Provider
- Enter Token Address
- Enter Token Amount
- Click Approve, wait for transaction to confirm.
- Click Add/Remove Liquidity, wait for transaction to confirm.

The faucet is designed to be funded through fee-on-transfer and similar reflect based ERC20 compatible tokens. Simply `STAKE >>` a token and as the address gains 
redistributed tokens, they are made available through the  `> COLLECT <` button. LP providers can unstake their tokens at any time, taking with them their portion of the current
current liquidity pool.

### As a User
- Select Token
- Click Collect
Press the `> COLLECT <` button to be awarded 1% of the current reflected liquidity pool size. Users are responsible for the gas fees of transfer and maintenance of the faucet.

### Decimals
Unifaucet does not respect decimals.

## For Non Fee-on-Transfer Tokens
ERC20 compatible tokens that do not feature a reflect or fee-on-transfer can still be added to the UniFaucet with a little more work. First the `RainbowStake` must be created
by adding a small amount of liquidity, then tokens can be sent directly to the `Stake` address, mimicking a "reflection". The Faucet will then spend out of the extra tokens.

## Web3 API
* Staking and unstaking is available through `addLiquidity` and `removeLiquidity`.
```
 function addLiquidity(address tokenA, uint amountADesired, address to) external returns (uint liquidity);
 function removeLiquidity(address tokenA, uint liquidity, address to) external returns (uint amountA);
```
* The current amount of reserved liquidity can be checked via the `RainbowStake` class.
```
 function getReserve() public view override returns (uint _reserve0);
```
* Collection happens via `drip()`
```
 function drip(address token, address to) payable external returns (uint amount);
```
