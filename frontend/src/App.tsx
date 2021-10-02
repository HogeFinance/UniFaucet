import faucetlogo from "./img/faucetpro.png";
import "./App.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import {
  Form,
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function App() {
  const providerOptions = {
    injected: {
      display: {
        logo: "data:image/gif;base64,INSERT_BASE64_STRING",
        name: "Injected",
        description: "Connect with the provider in your Browser"
      },
      package: null
    }
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
    providerOptions // required
  });

  let provider = null;
  let web3 = null;

  async function connectProvider() {
      provider = await web3Modal.connect();
      web3 = new Web3(provider);
    }
  
  connectProvider();


  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">UniFaucet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Button variant="secondary" className="pull-right, mx-2">
              Connect Metamask
            </Button>
          </Container>
        </Navbar>
      </header>
      {/* put all my garbage into components lmao */}

      <div>
        <h2 style={{ color: "white" }}>UniFaucet</h2>
        <br />
        <h4 style={{ color: "white" }}>A faucet for reflect tokens</h4>
        <br></br>
        <br></br>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label style={{ color: "white" }}>Select Network</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
            <Form.Label style={{ color: "white" }}>Select Token</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <br></br>
        <br></br>
      </div>
      <div>
        <Button variant="primary" className="mx-2">
          Stake &gt;&gt;
        </Button>
        <img src={faucetlogo} alt="Logo" />;
      </div>
      <div className="collect-btn">
        <span>
          <span id="tokenamount">6,000,000,000 HOGE</span>
          <Button variant="success" className="mx-2">
            &lt;&lt; Collect{" "}
          </Button>
        </span>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}



export default App;
