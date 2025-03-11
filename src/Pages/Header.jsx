import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { GiFeather } from "react-icons/gi";
import { FaLaptopCode, FaPaintBrush, FaCube } from "react-icons/fa"; // Import icons

const Header = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar-section1">
      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          {/* Logo on the left */}
          <Navbar.Brand href="#" className="logo">
            <span className="logo-suffix">U1CORE</span>
          </Navbar.Brand>

          {/* Offcanvas menu toggle */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="offcanvas-toggle"
            onClick={() => setShow(true)}
          />

          {/* Full-screen Offcanvas menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="custom-offcanvas"
            show={show}
            onHide={() => setShow(false)}
            placement="start"
            backdrop={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                U1CORE
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav-links mx-auto">
                {/* Dropdown for Services */}
                <NavDropdown
                  title="Services"
                  id="services-dropdown"
                  className="custom-dropdown"
                  show={dropdownOpen}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavDropdown.Item href="#">
                    <span className="icon-box">
                      <FaLaptopCode className="dropdown-icon" />
                    </span>
                    Web Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <span className="icon-box">
                      <FaPaintBrush className="dropdown-icon" />
                    </span>
                    UI/UX Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <span className="icon-box">
                      <FaCube className="dropdown-icon" />
                    </span>
                    Product Design
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#" className="custom-nav-link">
                  Cases
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Contact button aligned to the right */}
          <Button className="contact-btn ms-auto">
            Contact Us
            <span className="icon-circle">
              <GiFeather className="feather-icon" />
            </span>
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
