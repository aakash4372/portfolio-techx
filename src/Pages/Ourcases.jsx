import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './Ourcases.css';

const casesData = [
  {
    id: 1,
    image: "/image/p1.jpg",
    title: "KicksPotion",
    description: "This is a celebration of everything that moves you...",
    tags: ["Web Design", "E-Commerce"],
  },
  {
    id: 2,
    image: "/image/p2.jpg",
    title: "Spark",
    description: "Spark is pioneering the future of decentralized finance...",
    tags: ["Crypto"],
  },
  {
    id: 3,
    image: "/image/p3.jpg",
    title: "Crypto Earn",
    description: "A Financial Technology Company specializing in...",
    tags: ["Financial", "Crypto"],
  },
  {
    id: 4,
    image: "/image/p4.jpg",
    title: "Elevix Solutions",
    description: "Optimizing operational processes with Web3...",
    tags: ["Web Design", "Web3"],
  },
  {
    id: 5,
    image: "/image/p5.jpg",
    title: "Elevix Solutions",
    description: "Optimizing operational processes with Web3...",
    tags: ["Web Design", "Web3"],
  },
  {
    id: 6,
    image: "/image/p6.jpg",
    title: "Elevix Solutions",
    description: "Optimizing operational processes with Web3...",
    tags: ["Web Design", "Web3"],
  },
];

const CasesSection = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleViewMore = () => {
    setVisibleItems(casesData.length);
  };

  return (
    <div className="cases-section-bg">
      <Container className="cases-section pt-5">
        <h1 className="section-title text-center mb-5 pt-5">Our Cases</h1>
        <Row className="g-4">
          {casesData.slice(0, visibleItems).map((item) => (
            <Col md={6} key={item.id} className="case-item">
              <img src={item.image} alt={item.title} className="case-image" />
              <h3 className="case-title">{item.title}</h3>
              <p className="case-description">{item.description}</p>
              <div className="case-tags">
                {item.tags.map((tag, index) => (
                  <Button key={index} variant="text-white" size="sm" className="case-tag">
                    {tag}
                  </Button>
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {visibleItems < casesData.length && (
          <div className="bottom-btn pt-4 pb-5">
          <Button className="view-more-btn" onClick={handleViewMore}>
            View More
          </Button>
        </div>
        
        )}
      </Container>
    </div>
  );
};

export default CasesSection;
