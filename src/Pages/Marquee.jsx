import React from "react";
import { Container } from "react-bootstrap";
import "./Marquee.css"; // Import CSS file for styling


const MarqueeSlider = () => {
  const images = [
    "/image/m1.png",
    "/image/m2.png",
    "/image/m3.png",
    "/image/m4.png",
    "/image/m5.png",
    "/image/m6.png",
    "/image/m7.png",
    "/image/m8.png",
    "/image/m9.png",
    "/image/m10.png",
    "/image/m11.png",
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
