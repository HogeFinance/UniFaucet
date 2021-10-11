const Migrations     = artifacts.require("Migrations");
const Token          = artifacts.require("TestToken");
const RainbowFactory = artifacts.require("RainbowFactory");
const UniFaucet      = artifacts.require("UniFaucet");
const RainbowStake   = artifacts.require("RainbowStake");
const RainbowERC20   = artifacts.require("RainbowERC20");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);
  deployer.deploy(Token, "TestToken", "TT373");
  deployer.deploy(RainbowFactory).then(() =>
      deployer.deploy(UniFaucet, RainbowFactory.address, accounts[0], "1000000000000000")
  );
  deployer.deploy(RainbowStake);
  deployer.deploy(RainbowERC20);
};
