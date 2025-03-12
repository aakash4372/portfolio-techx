import React, { useState } from "react";
import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";
import { TbDragDrop } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Selectedtag.css";

const servicesData = {
  "Design": ["UI/UX Design", "Graphic Design"],
  "Branding & Marketing": ["Branding", "SEO/ASO"],
  "Development": ["WordPress Development", "Webflow Development"],
  "Copywriting & Content": ["Copywriting", "UX Audit"],
  "Audits & Strategies": ["Usability Testing"],
  "Audits2 & Strategies": ["Usability Testing"],
  "Audits3 & Strategies": ["Usability Testing"],
};

const contentData = {
  "UI/UX Design": "We create user-friendly designs with a focus on UX principles.",
  "Graphic Design": "High-quality graphics and visuals tailored for your brand.",
  "Branding": "Comprehensive branding strategies for your business.",
  "SEO/ASO": "Optimize your online presence for search engines.",
  "WordPress Development": "Custom WordPress solutions for your website.",
  "Webflow Development": "Modern Webflow website development.",
  "Copywriting": "Engaging content creation for your brand.",
  "UX Audit": "A deep dive into your UI/UX for better performance.",
  "Usability Testing": "Improve user experience through real-world testing."
};

const Selectedtag = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [remainingServices, setRemainingServices] = useState(servicesData);

  const addService = (service) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);

      const updatedServices = { ...remainingServices };
      Object.keys(updatedServices).forEach((category) => {
        updatedServices[category] = updatedServices[category].filter((s) => s !== service);
      });
      setRemainingServices(updatedServices);
    }
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
    if (selectedContent === service) setSelectedContent(null);

    const updatedServices = { ...remainingServices };
    Object.keys(servicesData).forEach((category) => {
      if (servicesData[category].includes(service)) {
        updatedServices[category] = [...updatedServices[category], service];
      }
    });
    setRemainingServices(updatedServices);
  };

  return (
    <div className="selectedtag-section mb-5">
      <Container className="design-order">
      <h2 className="text-center mb-5 text-dark">Collect your design order</h2>
      <Row className="row mb-5">
        {/* Left Panel - Services */}
        <Col lg={5} className="left-panel">
          <Accordion className="dark-accordion">
            {Object.keys(remainingServices).map((category, index) => (
              <Accordion.Item eventKey={index.toString()} key={category} className="dark-card">
                <Accordion.Header>{category}</Accordion.Header>
                <Accordion.Body>
                  {remainingServices[category].length > 0 ? (
                    remainingServices[category].map((service) => (
                      <Button
                        key={service}
                        variant="outline-light"
                        className="service-btn"
                        onClick={() => addService(service)}
                      >
                        {service} <FaPlus />
                      </Button>
                    ))
                  ) : (
                    <p className="text-muted">No services available</p>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

        </Col>

        {/* Right Panel - Selected Services */}
        <Col lg={7} className="right-panel">
          <Card className="selected-services dark-card">
            <Card.Body>
              {selectedServices.length === 0 ? (
                <div className="empty-state">
                  <TbDragDrop size={40} className="drag-icon text-white" />
                  <p className="text-muted">Select necessary services</p>
                </div>
              ) : (
                selectedServices.map((service) => (
                  <span
                    key={service}
                    className="selected-tag"
                    onClick={() => setSelectedContent(service)}
                  >
                    {service} <FaTimes onClick={() => removeService(service)} />
                  </span>
                ))
              )}
            </Card.Body>
          </Card>

          {/* Content Card (Black Theme) */}
          <Card className="content-card mt-3 dark-card">
            <Card.Body>
              {selectedContent ? (
                <p className="text-white">{contentData[selectedContent]}</p>
              ) : (
                <p className="text-muted">Select a service to see details</p>
              )}
            </Card.Body>
          </Card>

          <div className="right-bottom-btn">
            <Button variant="primary">Proceed</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Selectedtag;
