import "./cardeffort.css";

import React from 'react';


const ZigzagCards = () => {
  const cards = [
    {
      id: 1,
      image: 'image/s1.png',
      text: 'We craft intuitive and engaging interfaces that enhance user satisfaction.'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      text: 'Our designs improve usability and drive measurable conversions.'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      text: 'Contact us for more information.'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300',
      text: 'We are here to help you with your UI/UX needs.'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300',
      text: 'Let us create something amazing together.'
    }
  ];

  return (
    <div className="container my-5">
      {cards.map((card, index) => (
        <div key={card.id} className={`row mb-4 align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
          <div className="col-md-6">
            <img src={card.image} alt={`Card ${card.id}`} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZigzagCards;