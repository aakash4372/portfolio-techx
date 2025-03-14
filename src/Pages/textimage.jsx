import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Textimage.css";
const Textimage = () => {
  const text =
    "Every business starts with a strong online presence. U1CORE is your first step to launch with impact. From startups to established companies, we deliver high-quality, market-ready designs to fuel growth and set you up for long-term success.";

  const words = text.split(" "); // Splitting text into words
  const [visibleWords, setVisibleWords] = useState(Array(words.length).fill("grey"));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords((prev) => {
            const newColors = [...prev];
            newColors[index] = "white"; // Change one word to white at a time
            return newColors;
          });
        }, index * 600); // Delay each word change by 600ms
      });
    }
  }, [isVisible]); // Runs only when section becomes visible

  return (
    <section className="hero-section" ref={sectionRef}>
      <Container className="mt-5 mb-5">
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col lg={6} md={6} sm={12} className="text-section text-start">
            <Button className="brand-btn">U1CORE</Button>
            <h1>
              Your ultimate <br />
              <span className="highlight">go-to-market solution</span>
            </h1>
            <p>
              {words.map((word, index) => (
                <span key={index} style={{ color: visibleWords[index], transition: "color 0.5s ease-in-out" }}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </Col>

          {/* Right Side - Image */}
          <Col lg={6} md={6} sm={12} className="image-section">
            <img src="/image/heroimage.png" alt="Dotted Logo" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Textimage;
