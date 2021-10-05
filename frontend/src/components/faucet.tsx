import React from "react";
import { Form, Button } from "react-bootstrap";
import faucetlogo from "../img/faucetpro.png";

const Faucet: React.FC<{}> = () => {

  
  return (
    <>
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
    </>
  );
};

export default Faucet;
