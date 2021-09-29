require('dotenv').config();

var provider, address;
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privKey = process.env.PRIVATE_KEY;
const mumbaiKey = process.env.MUMBAI_KEY;
// const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      accounts: 5,
      defaultEtherBalance: 500
    },

    mainnet: {
      provider: () => new HDWalletProvider(privKey, `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`),
      gas: 5000000,           // Deployment of recent mints has been about 3.9 to 4.1mil gas
      gasPrice: 8000000000, // 105 gwei
      network_id: 1,
      skipDryRun: true
    },

    ropsten: {
      provider: () => new HDWalletProvider(privKey, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`),
      network_id: 3
    },

    rinkeby: {
      provider: () => new HDWalletProvider(privKey, `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`),
      network_id: 4
    },

    mumbai: {
      provider: () => new HDWalletProvider(mumbaiKey, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.8.7"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  },

  api_keys: {
    etherscan: process.env.ETHERSCAN_API
  },

  plugins: [
    'truffle-plugin-verify'
  ]
};
