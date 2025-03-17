import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Case.css";

const projects = [
  {
    id: 1,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p3.jpg",
    link: "https://jkcoachingacademy.com/",
  },
  {
    id: 4,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM TECHX presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "/image/p6.jpg",
    link: "#",
  },
];

const Case = () => {
  const sectionRefs = useRef([]); // Array of refs for each project card

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return; // Skip if ref is null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Trigger the color change for this card
            const letters = ref.querySelectorAll(".case-desc span");
            letters.forEach((letter, letterIndex) => {
              setTimeout(() => {
                letter.style.color = "white";
              }, letterIndex * 50); // Delay each letter by 50ms
            });
            observer.unobserve(ref); // Stop observing after animation
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the card is visible
      );

      observer.observe(ref);
      observers.push(observer);
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="case-section">
    <div className="pt-5">
    <Container className="case-container">
        {projects.map((project, index) => (
          <Row
            key={project.id}
            ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each card
            className={`case-row align-items-center ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <Col md={6}>
              <img
                src={project.image}
                alt={project.title}
                className="case-img img-fluid"
              />
            </Col>
            <Col md={6} className="case-content">
              <h3 className="case-title">{project.title}</h3>
              <p className="case-desc">
                {project.description.split("").map((letter, letterIndex) => (
                  <span key={letterIndex} style={{ color: "grey" }}>
                    {letter}
                  </span>
                ))}
              </p>
              <Button className="visit-btn" href={project.link} target="_blank">
                Visit Site <MdOutlineArrowOutward className="ms-2" size={30} />
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
    </div>
  );
};

export default Case;