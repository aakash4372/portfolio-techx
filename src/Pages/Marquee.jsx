import React from "react";
import { Container } from "react-bootstrap";
import "./Marquee.css"; // Import CSS file for styling


const MarqueeSlider = () => {
  const images = [
    "/image/logo1.webp",
    "/image/logo2.webp",
    "/image/logo3.webp",
    "/image/logo4.webp",
    "/image/logo5.webp",
    "/image/logo6.webp",
    "/image/logo7.webp",
    "/image/logo8.webp",
    "/image/logo9.webp",
    "/image/logo10.webp",
  ];

  return (
    <div className="Marquee-section mb-0">
        <Container fluid className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`slide-${index}`} className="marquee-img" />
          ))}
          {/* Duplicate images for seamless loop effect */}
          {images.map((img, index) => (
            <img key={index + images.length} src={img} alt={`slide-${index}-copy`} className="marquee-img" />
          ))}
        </div>
      </div>
    </Container>
   
    </div>
  );
};

export default MarqueeSlider;
