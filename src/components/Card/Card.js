import React from 'react';
import './Card.scss';

const Card = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time}</p>
      <p>{number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel Reservation</button>
    </div>
  )
};

export default Card;