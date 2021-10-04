import "./App.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { irainbowstake, standardtoken, iunifaucet } from "./contractabi";

import Faucet from "./components/faucet";
import Header from "./components/header";

function App() {
  const providerOptions = {
    injected: {
      display: {
        logo: "data:image/gif;base64,INSERT_BASE64_STRING",
        name: "Injected",
        description: "Connect with the provider in your Browser",
      },
      package: null,
    },
    // Example with WalletConnect provider
    /*walletconnect: {
      display: {
        logo: "data:image/gif;base64,INSERT_BASE64_STRING",
        name: "Mobile",
        description: "Scan qrcode with your mobile wallet"
      },
      package: WalletConnectProvider,
      options: {
        infuraId: "INFURA_ID" // required
      }
    } */
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  let provider = null;
  let web3: any = null;

  async function connectProvider() {
    provider = await web3Modal.connect();
  }
  connectProvider();

  web3 = new Web3(provider);

  let testFaucetAddr = "0x0";
  let unifaucetInstance = new web3.eth.Contract(iunifaucet, testFaucetAddr);
  let standardTokenInstance = null;

  //TODO: IMPLEMENT Smart contract methods
  //
  //function addLiquidity(address tokenA, uint amountADesired, address to) external returns (uint liquidity);
  async function addLiquidity() {
    //get token var/addr from user input
    let testTokenAddr = "0x0";
    let standardTokenAmt = 0;
    //get connect wallet account addr
    let userAccount = "0x0";

    standardTokenInstance = web3.eth.Contract(standardtoken, testTokenAddr);

    //approve token for spending on the faucet add liq addr
    await standardTokenInstance.methods.approve(
      testFaucetAddr,
      standardTokenAmt
    );

    //add liquidity
    await unifaucetInstance.methods.addLiquidity(
      testTokenAddr,
      standardTokenAmt,
      userAccount
    );

    //get stake amount to confirm with user
  }
  //function removeLiquidity(address tokenA, uint liquidity, address to) external returns (uint amountA);
  async function removeLiquidity() {
    //get token var/addr from user input
    //approve token for spending on the faucet add liq addr
    //remove liquidity
  }
  //
  //From RainbowStake
  //function getReserve() public view override returns (uint _reserve0);

  return (
    <div className="App">
      <Header />
      <Faucet />
    </div>
  );
}

export default App;
