import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/Ourcases.css';

const casesData = [
  {
    image: "Banners/p1.png",
    title: "FreshBounty",
    description: "This is a celebration of everything that moves you...",
    tags: ["E-Commerce"],
  },
  {
    image: "Banners/p13.png",
    title: "Red Collar",
    description: "Fashioning your style with premium clothing and accessories.",
    tags: ["App"],
  },
  {
    image: "Banners/p14.png",
    title: "Bezooz",
    description: "Revolutionizing education with modern tools and interactive learning.",
    tags: ["Education"],
  },
  {
    image: "Banners/p17.png",
    title: "Rk Global Associatees",
    description: "Expert business consulting solutions for your growth.",
    tags: ["Business"],
  },
  {
    image: "Banners/p2.png",
    title: "Chinna Cleaning",
    description: "Spark is pioneering the future of decentralized finance...",
    tags: ["Cleaning", "Web design"],
  },
  {
    image: "Banners/p3.png",
    title: "LearnEng",
    description: "Empowering your journey to mastery in the English language",
    tags: ["Education"],
  },
  {
    image: "Banners/p4.png",
    title: "TravellersNeed",
    description: "Your ultimate travel companion for unforgettable adventures.",
    tags: ["Tours and Travels"],
  },
  {
    image: "Banners/p5.png",
    title: "Hunts World Properties",
    description: "Your trusted partner in finding the perfect real estate.",
    tags: ["Web Design", "Real estate"],
  },
  {
    image: "Banners/p6.png",
    title: "JK Coaching Academy",
    description: "Shaping futures with quality education and expert guidance.",
    tags: ["Education"],
  },
  {
    image: "Banners/p7.png",
    title: "MyGoldInternational",
    description: "Unlocking the world of gold investments and precious metal solutions.",
    tags: ["Web Design"],
  },
  {
    image: "Banners/p8.png",
    title: "BM Academy",
    description: "Where learning meets excellence to shape bright futures.",
    tags: ["Education"],
  },
  {
    image: "Banners/p9.png",
    title: "Design Info",
    description: "Transforming your photos into stunning works of art.",
    tags: ["Web design"],
  },
  {
    image: "Banners/p10.png",
    title: "Rain Info Tech",
    description: "Elevating your photos with expert editing and technology.",
    tags: ["Web design"],
  },
  {
    image: "Banners/p11.png",
    title: "NSA Holidays Kodaikannal",
    description: "Your gateway to serene and unforgettable holiday experiences.",
    tags: ["Web design", "Tours and Travels"],
  },
  {
    image: "Banners/p12.png",
    title: "Zhagaram Academy of Learning and Teaching",
    description: "Redefining education with innovative and impactful learning.",
    tags: ["Web design", "Education"],
  },
];

const CasesSection = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleViewMore = () => {
    setVisibleItems(casesData.length);
  };

  return (
    <div className="cases-section-bg" id="cases-catalog">
      <Container className="cases-section pt-5">
        <h1 className="section-title text-center mb-5 pt-5">Our Cases</h1>
        <Row className="g-4">
          {casesData.slice(0, visibleItems).map((item, index) => (
            <Col
              md={6}
              key={index} // Automatically generates unique ID using array index
              className="case-item"
            >
              <Link to="/cases">
                <img src={item.image} alt={item.title} className="case-image" />
              </Link>
              <h3 className="case-title">{item.title}</h3>
              <p className="case-description">{item.description}</p>
              <div className="case-tags">
                {item.tags.map((tag, tagIndex) => (
                  <Link to="/cases" key={tagIndex}>
                    <Button variant="text-white" size="sm" className="case-tag">
                      {tag}
                    </Button>
                  </Link>
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {visibleItems < casesData.length && (
          <div className="bottom-btn pt-4 pb-5">
            <Button className="view-more-btn" onClick={handleViewMore}>
              View More Cases
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CasesSection;