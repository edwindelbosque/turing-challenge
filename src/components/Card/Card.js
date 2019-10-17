import React from 'react';
import './Card.scss';

const Card = ({ id, name, date, time, number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
};

export default Card;