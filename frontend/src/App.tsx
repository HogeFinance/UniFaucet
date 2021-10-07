import React from "react";
import "./App.css";
import Faucet from "./components/faucet";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="container">
        {/*<Header connectVariantColor = {connectVariantColor} connectButtonText = {connectButtonText} />*/}
        <Faucet />
      </div>
    </div>
  );
};

export default App;
