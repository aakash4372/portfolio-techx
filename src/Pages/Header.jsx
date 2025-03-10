import React from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          <Navbar.Brand href="#" className="logo">
            U1<span className="logo-suffix">CORE</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="offcanvas-toggle"
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                U1CORE
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Cases</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#" className="disabled">
                  Careers <span className="soon">SOON</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Button className="contact-btn">Contact us</Button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
