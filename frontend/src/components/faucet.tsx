import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import faucetlogo from "../img/faucet.png";

const Faucet: React.FC<{}> = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div>
        <h2 style={{ color: "white" }}><b>[UniFaucet]</b></h2>
        <br />
        <h5 style={{ color: "#828282" }}>A faucet for reflect tokens</h5>
        <br></br>
        <br></br>
      </div>
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <Form>
            <Form.Group className="mb-3" controlId="formSelect">
              <Form.Control
                className="form-select token-btn"
                as="select"
                aria-label="Default select example"
              >
                <option>Token</option>
                <option value="1">Hoge</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Button variant="primary" onClick={handleShow} className="position-absolute top-50">
            Stake &gt;&gt;
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Stake Tokens</Modal.Title>
          </Modal.Header>
          <Modal.Body>Stake Your Tokens in the Faucet
            <label> Token Addr: 
            <input type="text" name="tokenAddrInput" id="tokenAddr" list="verifiedtokens"></input>
            </label>
            <datalist id="verifiedtokens">
            <option value="0x0">HOGE</option>
            <option value="0x0">Test Token</option>
            </datalist>
            <div style = {{margin : "1em"}} >
            <label> Amount: 
            <input type="text" name="amountInput" id="amountAddr"></input>
            </label>
            </div>
           

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="col-sm-4">
          <img src={faucetlogo} alt="Logo" />;
        </div>
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

