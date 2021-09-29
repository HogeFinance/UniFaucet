const Migrations = artifacts.require("Migrations");
const Token = artifacts.require("TestToken");
const RainbowFactory = artifacts.require("RainbowFactory");
const UniFaucet = artifacts.require("UniFaucet");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);
  deployer.deploy(Token, "TestToken", "TT");
  deployer.deploy(RainbowFactory, accounts[0]).then(() =>
      // Subtitute init code into RainbowLibrary for router
      deployer.deploy(UniFaucet, RainbowFactory.address)
  )
};
