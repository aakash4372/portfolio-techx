import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import './footer.css';
import ModalComponent from "./ModalComponent";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Function to handle smooth scrolling after navigation
  const handleNavigation = (e, path, id) => {
    e.preventDefault();
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <footer className="footer text-light py-5">
      <Container className="footer-container">
        <div className="text-center mb-4">
          <img src="Banners/Logo.png" alt="Illustration" className="illustration mb-3" />
          <h2>Have a big idea?</h2>
          <h6 className="footer-text-h6 text-center">Let's bring it to life together!</h6>
          <Button variant="warning" onClick={handleShow}>Get started</Button>
        </div>

        <Row className="mt-4">
          {/* Logo Section */}
          <Col xs={12} className="text-center mb-4">
            <img src="https://www.u1core.com/wp-content/themes/u1core/img/footer/big-logo.png" alt="Big Logo" />
          </Col>

          <Row className="w-100">
            {/* Logo and Social Media */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
              <Link to="/">
                <img src="Banners/Bmtech.png" alt="Logo" className="mb-2" width={200} />
              </Link>
              <p className="text-center text-md-start">Your reliable design partner</p>
            </Col>

            {/* General Section */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0 ps-lg-5">
              <h4 className="heading-footer">General</h4>
              <ul className="list-unstyled">
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "cases-catalog")} className="text-light">Cases</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "about-us")} className="text-light">About us</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "faq")} className="text-light">FAQ</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "live-calculator")} className="text-light">Live calculator</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "how-we-work")} className="text-light">How we work</Link></li>
              </ul>
            </Col>

            {/* Services Section */}
            <Col xs={12} md={4} className="text-center text-md-start ps-lg-5">
              <h4 className="heading-footer">Services</h4>
              <ul className="list-unstyled">
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "cases-catalog")} className="text-light">Product Design</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "about-us")} className="text-light">Web Design</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "ui-ux-design")} className="text-light">UI/UX Design</Link></li>
              </ul>
            </Col>
          </Row>
        </Row>

        {/* Copyright Section */}
        <div className="text-center mt-5 mb-0">
          <h5 className="mb-0 pb-0 copy-right">&copy; {new Date().getFullYear()} BMTechX.in. All rights reserved.</h5>
        </div>
      </Container>
      <ModalComponent show={showModal} handleClose={handleClose} />
    </footer>
  );
};

export default Footer;
