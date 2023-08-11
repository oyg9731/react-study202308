import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
    const madClass = 'card ' + className; 
  return <div className={madClass}>
    {children}
  </div>;
};

export default Card;
