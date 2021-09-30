const UniFaucet      = artifacts.require("UniFaucet");
const RainbowERC20   = artifacts.require("RainbowERC20");
const RainbowFactory = artifacts.require("RainbowFactory");
const RainbowStake   = artifacts.require("RainbowStake");
const TestToken      = artifacts.require("TestToken");

/*
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("UniFaucet", function (accounts) {
  it("should addLiquidity", async function () {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();
    await token.mint(accounts[0], 100);
    await token.approve(faucet.address, 100);
    await faucet.addLiquidity(token.address, 100, accounts[0]);

    // No tokens left in accounts[0]
    let stake = await factory.getStake(token.address);
    let balance = await token.balanceOf(accounts[0]);
    let bal = await balance.toNumber();
    assert.equal(bal, 0);

    // Has liquidity
    let stakeContract = await RainbowERC20.at(stake);
    balance = await stakeContract.balanceOf(accounts[0]);
    bal = await balance.toNumber();
    assert.equal(bal, 100);

    // Stake has tokens
    balance = await token.balanceOf(stake);
    bal = await balance.toNumber();
    assert.equal(bal, 100);
  });

  it("should removeLiquidity", async function () {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();
    let stake = await factory.getStake(token.address);
    let stakeContract = await RainbowERC20.at(stake);
    await stakeContract.approve(faucet.address, 100);
    await faucet.removeLiquidity(token.address, 100, accounts[0]);

    // Tokens returned to account
    let balance = await token.balanceOf(accounts[0]);
    let bal = await balance.toNumber();
    assert.equal(bal, 100);

    // Stake has no tokens
    balance = await token.balanceOf(stake);
    bal = await balance.toNumber();
    assert.equal(bal, 0);
  })
});
