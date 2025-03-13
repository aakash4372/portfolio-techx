import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whychoose.css";

const services = [
  {
    image: "/image/icon1.png",
    title: "Custom Product Design",
    description:
      "We create personalized designs tailored to your brand identity and target audience, ensuring your product stands out in the market.",
  },
  {
    image: "/image/icon2.png",
    title: "Expertise in Digital Products",
    description:
      "With extensive experience in SaaS, Web3, fintech, and AI, we design solutions that are both innovative and highly functional.",
  },
  {
    image: "/image/icon3.png",
    title: "In-Depth Product Understanding",
    description:
      "We ensure deep knowledge and insight into every aspect of your product, helping you make informed decisions.",
  },
  {
    image: "/image/icon4.png",
    title: "Efficient Project Management",
    description:
      "We adhere strictly to timelines and budgets, ensuring seamless delivery without compromising on quality.",
  },
  {
    image: "/image/icon5.png",
    title: "Collaborative Communication",
    description:
      "We ensure smooth collaboration to align with your business goals and deliver successful products.",
  },
  {
    image: "/image/icon6.png",
    title: "Focus on Results",
    description:
      "We deliver measurable results, ensuring your product looks great and performs well in achieving your goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <Container className="py-2">
        <h2 className="text-center fw-bold mb-5">
          Why Choose U1CORE for Your Product Design?
        </h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6}>
              <Card className="h-100 text-start p-4 border-0 text-dark">
                <div className="image-box mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid service-image"
                  />
                </div>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
