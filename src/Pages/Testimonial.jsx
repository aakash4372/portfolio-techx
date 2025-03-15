import React, { useState } from "react";
import "./Testimonial.css"; // Import the CSS file
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Working with the U1Core team on the UX design for DreamCoachMatch.com has been an incredible experience! From day one, they impressed us with their creativity, responsiveness, exceptional communication.",
    name: "Yuri Minski",
    role: "CEO & Founder at Dream Coach Match",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
    rating: "5.0",
  },
  {
    text: "U1CORE Bureau has been exceptional with helping us with branding, design, UX, and UI for a new debit card design tool that we are about to launch.",
    name: "Jelle van Schaick",
    role: "Head of Marketing at Integrio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
    rating: "4.9",
  },
  {
    text: "Working with U1CORE was an exceptional experience! I engaged their team for UI/UX design services for my mobile app, and they truly delivered.",
    name: "Illarion Medvedev",
    role: "CEO at iMedesign",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
    rating: "5.0",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-section">
      <h2 className="text-center fw-bold pt-5 pb-5">
        What our partners say?
      </h2>
      <div className="testimonial-container pb-5">
        <div className="testimonial-card">
          {/* GoodFirms Rating Badge */}
          <div className="testimonial-rating mb-3">
            <span>⭐ GoodFirms {testimonials[index].rating}</span>
          </div>

          {/* Testimonial Text */}
          <p className="testimonial-text">
          <FaQuoteLeft className="quote-icon" /> {testimonials[index].text} <FaQuoteRight className="quote-icon" />
        </p>

          {/* User Info */}
          <div className="testimonial-user">
            <img src={testimonials[index].image} alt={testimonials[index].name} className="testimonial-user-img" />
            <div className="testimonial-user-info">
              <h5>{testimonials[index].name}</h5>
              <small>{testimonials[index].role}</small>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="testimonial-buttons">
            <button onClick={prevTestimonial} className="testimonial-nav-btn">
              <FaArrowLeft />
            </button>
            <button onClick={nextTestimonial} className="testimonial-nav-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;
