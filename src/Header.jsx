import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./header.css";
import logo from "../src/assets/images/Logo.png";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-color">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="company logo" width="100%" height="100%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu-pages">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
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
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              <Nav.Link href="#requestDemo">
                <Button className="primary">Request Demo</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
