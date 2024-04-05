import React from 'react';
import './CardBlack.css';

const CardBlack = ({ children }) => {
  return (
    <div className="card-black">
      {children}
    </div>
  );
};

export default CardBlack;
