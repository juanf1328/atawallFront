import React from 'react';

const Card = ({ color, title }) => {
  return (
    <div className={`card ${color}`}>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
