const Migrations     = artifacts.require("Migrations");
const Token          = artifacts.require("TestToken");
const RainbowFactory = artifacts.require("RainbowFactory");
const UniFaucet      = artifacts.require("UniFaucet");
const RainbowStake   = artifacts.require("RainbowStake");
const RainbowERC20   = artifacts.require("RainbowERC20");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);
  deployer.deploy(Token, "TestToken", "TT373");
  deployer.deploy(RainbowFactory, accounts[0]).then(() =>
      // Subtitute init code into RainbowLibrary for router
      deployer.deploy(UniFaucet, RainbowFactory.address, accounts[1])
  );
  deployer.deploy(RainbowStake);
  deployer.deploy(RainbowERC20);
};
