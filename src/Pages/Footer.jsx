import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './footer.css';

const socialLinks = [
  { href: "https://www.behance.net/u1core", img: "https://www.u1core.com/wp-content/uploads/2025/02/Frame-1.svg" },
  { href: "https://www.instagram.com/u1core.bureau", img: "https://www.u1core.com/wp-content/uploads/2025/02/Frame-6.svg" },
  { href: "https://www.youtube.com/@u1core", img: "https://www.u1core.com/wp-content/uploads/2025/02/Frame-5.svg" },
  { href: "https://www.linkedin.com/company/uonecore/", img: "https://www.u1core.com/wp-content/uploads/2025/02/Frame-2.svg" },
  { href: "https://dribbble.com/tarasoliinyk", img: "https://www.u1core.com/wp-content/uploads/2025/02/Frame.svg" },
];

const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <Container className="footer-container">
        <div className="text-center mb-4">
          <img src="https://www.u1core.com/wp-content/themes/u1core/img/footer/illustration.png" alt="Illustration" className="illustration mb-3" />
          <h2>Have a big idea?</h2>
          <h6 className=" footer-text-h6 text-center">Let's bring it to life together!</h6>
          <Button variant="warning">Get started</Button>
        </div>

        <Row className="mt-4">
          {/* Logo Section */}
          <Col xs={12} className="text-center mb-4">
            <img src="https://www.u1core.com/wp-content/themes/u1core/img/footer/big-logo.png" alt="Big Logo" />
          </Col>

          {/* Footer Links */}
          <Row className="w-100">
            {/* Logo and Social Media */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
              <a href="/">
                <img src="https://www.u1core.com/wp-content/themes/u1core/img/logo/logo.svg" alt="Logo" className="mb-2" />
              </a>
              <p>Your reliable design partner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={social.img} alt="Social Icon" width="20" height="20" />
                  </a>
                ))}
              </div>
            </Col>

            {/* General Section */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0 ps-lg-5">
              <h4 className="heading-footer">General</h4>
              <ul className="list-unstyled">
                <li><a href="/cases-catalog/" className="text-light">Cases</a></li>
                <li><a href="/#about-us" className="text-light">About us</a></li>
                <li><a href="/#faq" className="text-light">FAQ</a></li>
                <li><a href="/#live-calculator" className="text-light">Live calculator</a></li>
                <li><a href="/#how-we-work" className="text-light">How we work</a></li>
              </ul>
            </Col>

            {/* Another General Section */}
            <Col xs={12} md={4} className="text-center text-md-start ps-lg-5">
              <h4 className="heading-footer">Services</h4>
              <ul className="list-unstyled">
                <li><a href="/cases-catalog" className="text-light">Product Design</a></li>
                <li><a href="/#about-us" className="text-light">Web Design</a></li>
                <li><a href="/#UI/UX Design" className="text-light">UI/UX Design</a></li>
              </ul>
            </Col>
          </Row>
        </Row>

        {/* Copyright Section */}
        <div className="text-center mt-5 mb-0">
          <h5 className="mb-0 pb-0 copy-right">&copy; {new Date().getFullYear()} BMTechin. All rights reserved.</h5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
