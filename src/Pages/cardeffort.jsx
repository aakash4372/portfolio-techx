import "./cardeffort.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalComponent from "./ModalComponent"; // Import Modal


const ZigzagCards = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const cards = [
    {
      id: 1,
      image: "image/s1.png",
      logo: "image/s1.1.png",
      heading: "UI/UX Design",
      text: "We craft intuitive and engaging interfaces that enhance user satisfaction, improve usability, and drive measurable conversions.",
      buttonText: "Contact Us",
    },
    {
      id: 2,
      image: "image/s2.png",
      logo: "image/s2.2.png",
      heading: "Product Design",
      text: "We transform innovative ideas into fully functional, market-ready products that perfectly align with your business objectives and goals.",
      buttonText: "Contact Us",
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
      buttonText: "Contact Us",
    },
    {
      id: 5,
      image: "image/s5.png",
      logo: "image/s5.5.png",
      heading: "Web Development",
      text: "We build scalable, high-performance websites with clean code, seamless functionality, and optimized user experiences across all devices.",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="cardeffort">
      <h2 className="text-center fw-bold pt-5 pb-5 mb-5">Our Services</h2>
      <div className="container my-5">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`row mb-4 align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
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
              <button className="btn btn-primary" onClick={handleShow}>{card.buttonText}</button>
            </div>
          </motion.div>
        ))}
      </div>
      <ModalComponent show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ZigzagCards;
