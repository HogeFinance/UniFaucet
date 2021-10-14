import React, {MouseEventHandler} from "react";
import { Button, Container, Navbar } from "react-bootstrap";

const Header: React.FC<{ connectVariantColor: string, connectButtonText: string, connectWallet: MouseEventHandler<HTMLElement> }> = ({ connectVariantColor, connectButtonText, connectWallet }) => {


  const buttonStyle = {
    "marginLeft": 'auto',
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          { /* <Navbar.Collapse id="basic-navbar-nav">
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
            </Navbar.Collapse> */ }
          <Button style={buttonStyle} variant={connectVariantColor} className=" buttonRight" onClick={connectWallet}>
            {connectButtonText}
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
