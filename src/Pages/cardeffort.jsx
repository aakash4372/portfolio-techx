import "./cardeffort.css";
import React, { useEffect, useRef } from "react";

const ZigzagCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add class when in view
          } else {
            entry.target.classList.remove("visible"); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = [
    {
      id: 1,
      image: "image/s1.png",
      logo: "image/s1.1.png",
      heading: "UI/UX Design",
      text: "We craft intuitive and engaging interfaces that enhance user satisfaction, improve usability, and drive measurable conversions.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "image/s2.png",
      logo: "image/s2.2.png",
      heading: "Product Design",
      text: "We transform innovative ideas into fully functional, market-ready products that perfectly align with your business objectives and goals.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "image/s1.png",
      logo: "image/s3.3.png",
      heading: "Web Design",
      text: "We create visually stunning, user-friendly websites that capture your brand’s essence and captivate your target audience.",
      buttonText: "Contact Us",
    },
    {
      id: 4,
      image: "image/s4.png",
      logo: "image/s4.4.png",
      heading: "3D & Motion",
      text: "We craft immersive 3D visuals and dynamic motion graphics that bring your brand to life, enhancing user engagement and storytelling.",
      buttonText: "Get Started",
    },
    {
      id: 5,
      image: "image/s5.png",
      logo: "image/s5.5.png",
      heading: "Web Development",
      text: "We build scalable, high-performance websites with clean code, seamless functionality, and optimized user experiences across all devices.",
      buttonText: "Join Us",
    },
  ];

  return (
    <div className="cardeffort">
       <h2 className="text-center fw-bold pt-5 pb-5 mb-5">
       Our services
        </h2>
      <div className="container my-5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`row mb-4 align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
          >
            <div className="col-md-6 mb-2">
              <img src={card.image} alt={`Card ${card.id}`} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <img src={card.logo} alt="Logo" className="logo-img mb-4 mt-3" />
              <h2 className="heading-with-logo">
                <span>{card.heading}</span>
              </h2>
              <p>{card.text}</p>
              <button className="btn btn-primary">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZigzagCards;
