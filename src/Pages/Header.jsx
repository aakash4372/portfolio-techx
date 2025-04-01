import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { GiFeather } from "react-icons/gi";
import { FaLaptopCode, FaPaintBrush, FaCube } from "react-icons/fa";
import ModalComponent from "./ModalComponent";

const Header = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleNavigate = () => {
    navigate("/cases");
    setShow(false); // Close the offcanvas
  };

  return (
    <div className="navbar-section1">
      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          {/* Logo (Navbar.Brand) navigates to home "/" */}
          <Navbar.Brand as={Link} to="/" className="logo" onClick={() => setShow(false)}>
            <span className="logo-suffix">BM TechX</span>
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
            <Offcanvas.Header closeButton className="offcanvas-header">
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav-links">
                {/* Dropdown for Services */}
                <NavDropdown
                  title="Services"
                  id="services-dropdown"
                  className="custom-dropdown"
                  show={dropdownOpen}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaLaptopCode className="dropdown-icon" />
                    </span>
                    Web Design
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaPaintBrush className="dropdown-icon" />
                    </span>
                    UI/UX Design
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaCube className="dropdown-icon" />
                    </span>
                    Product Design
                  </NavDropdown.Item>
                </NavDropdown>

                {/* NavLink to navigate to Cases */}
                <Nav.Link as={Link} to="/cases" className="custom-nav-link" onClick={() => setShow(false)}>
                  Cases
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Contact button aligned to the right */}
          <Button className="contact-btn ms-auto" onClick={handleShow}>
            Contact Us
            <span className="icon-circle">
              <GiFeather className="feather-icon" />
            </span>
          </Button>
        </div>
      </Navbar>

      <ModalComponent show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Header;
