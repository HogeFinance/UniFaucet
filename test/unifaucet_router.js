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
    await faucet.createLiquidityStake(token.address);

    let stake = await factory.getStake(token.address);
    await token.approve(stake, 100);
    let stakeContract = await RainbowStake.at(stake);
    await stakeContract.addLiquidity(token.address, 100, accounts[0]);

    // No tokens left in accounts[0]
    let balance = await token.balanceOf(accounts[0]);
    let bal     = await balance.toNumber();
    assert.equal(bal, 0);

    // Has liquidity
    balance = await stakeContract.balanceOf(accounts[0]);
    bal     = await balance.toNumber();
    assert.equal(bal, 100);

    // Stake has tokens
    balance = await token.balanceOf(stake);
    bal     = await balance.toNumber();
    assert.equal(bal, 100);

    // Stake reserve is correct
    let rainbowStakeInstance = await RainbowStake.at(stake);
    balance = await rainbowStakeInstance.getReserve();
    bal     = await balance.toNumber();
    assert.equal(bal, 100);
  });

  it("add more to liquidity, have correct reserve", async function() {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();

    // Add more liquidity
    await token.mint(accounts[0], 100);
    let stake = await factory.getStake(token.address);
    await token.approve(stake, 100);
    let stakeContract = await RainbowStake.at(stake);
    await stakeContract.addLiquidity(token.address, 100, accounts[0]);


    // No tokens left in accounts[0]
    let balance = await token.balanceOf(accounts[0]);
    let bal     = await balance.toNumber();
    assert.equal(bal, 0);

    // Stake has tokens
    balance = await token.balanceOf(stake);
    bal     = await balance.toNumber();
    assert.equal(bal, 200);

    // Has correct Reserve
    let rainbowStakeInstance = await RainbowStake.at(stake);
    balance = await rainbowStakeInstance.getReserve();
    bal     = await balance.toNumber();
    assert.equal(bal, 200);
  });

  it("should reject drip tokens when no reflection", async function() {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let catchRevert = require("./exception.js").catchRevert;

    await catchRevert(faucet.drip(token.address, accounts[1]));
  });

  it("should removeLiquidity", async function () {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();
    let stake = await factory.getStake(token.address);
    let stakeContract = await RainbowERC20.at(stake);
    await stakeContract.approve(faucet.address, 100);
    await faucet.removeLiquidity(token.address, 100, accounts[0]);

    // Stake reserve is correct
    let rainbowStakeInstance = await RainbowStake.at(stake);
    let balance = await rainbowStakeInstance.getReserve();
    let bal = await balance.toNumber();
    assert.equal(bal, 100);

    // Tokens returned to account
    balance = await token.balanceOf(accounts[0]);
    bal = await balance.toNumber();
    assert.equal(bal, 100);

    // Stake has some tokens left
    balance = await token.balanceOf(stake);
    bal = await balance.toNumber();
    assert.equal(bal, 100);
  });

  it("add more to liquidity, have correct reserve", async function() {
    let token = await TestToken.deployed();
    let factory = await RainbowFactory.deployed();

    // Add more liquidity
    await token.mint(accounts[0], 3);
    let stake = await factory.getStake(token.address);
    await token.approve(stake, 3);
    let stakeContract = await RainbowStake.at(stake);
    await stakeContract.addLiquidity(token.address, 3, accounts[0]);


    // Has correct Reserve
    let rainbowStakeInstance = await RainbowStake.at(stake);
    let balance = await rainbowStakeInstance.getReserve();
    let bal     = await balance.toNumber();
    assert.equal(bal, 103);
  });

  it("should drip when reflection", async function() {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();
    let stake = await factory.getStake(token.address);

    // Mint "reflection" to stake address
    await token.mint(stake, 100);

    // Have correct available balance
    let balance = await faucet.getAvailableSpend(token.address);
    let bal = await balance.toNumber();
    assert.equal(bal, 100);

    // Pay out to another address
    await faucet.drip(token.address, accounts[1], {value: 10000000000000000});

    balance = await token.balanceOf(accounts[1]);
    bal = await balance.toNumber();
    assert.equal(bal, 1);

    // Stake reserve is correct
    let rainbowStakeInstance = await RainbowStake.at(stake);
    balance = await rainbowStakeInstance.getReserve();
    bal = await balance.toNumber();
    assert.equal(bal, 103);
  });

  it("should update reserve to correct amount when adding after reflection", async function() {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();

    // Add more liquidity
    await token.mint(accounts[0], 10);
    let stake = await factory.getStake(token.address);
    await token.approve(stake, 10);
    let stakeContract = await RainbowStake.at(stake);
    await stakeContract.addLiquidity(token.address, 10, accounts[0]);

    // Have correct available balance
    let balance = await faucet.getAvailableSpend(token.address);
    let bal = await balance.toNumber();
    assert.equal(bal, 99);
  })

  it("should return correct liquidity on remove after reflection", async function() {
    let token = await TestToken.deployed();
    let faucet = await UniFaucet.deployed();
    let factory = await RainbowFactory.deployed();
    let stake = await factory.getStake(token.address);
    let stakeContract = await RainbowERC20.at(stake);

    await stakeContract.approve(faucet.address, 10);
    await faucet.removeLiquidity(token.address, 10, accounts[0]);

    let balance = await token.balanceOf(stake);
    let bal = await balance.toNumber()
    assert.equal(bal, 202)
  })

  it("should allow fee to be changed", async function() {
    let faucet = await UniFaucet.deployed();
    await faucet.setFee(100);
  })

  it("should reject fee change when not from feeTo", async function() {
    let faucet = await UniFaucet.deployed();
    let catchRevert = require("./exception.js").catchRevert;
    await catchRevert(faucet.setFee(100, {from: accounts[1]}));
  })
});
