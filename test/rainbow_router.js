const UniFaucet      = artifacts.require("UniFaucet");
const RainbowERC20   = artifacts.require("RainbowERC20");
const RainbowFactory = artifacts.require("RainbowFactory");
const RainbowStake   = artifacts.require("RainbowStake");
const TestToken      = artifacts.require("TestToken");

/*
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("UniFaucet", function (accounts) {
  beforeEach("set the fixtures", async () => {
    let token = await TestToken.deployed();
    let router = await UniFaucet.deployed();
  });

  it("should assert true", async function () {
    await UniFaucet.deployed();
    return assert.isTrue(true);
  });
});
