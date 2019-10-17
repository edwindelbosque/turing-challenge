import React from 'react';
import './Card.scss';

const Card = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h3>{date[0] === '1' ? date : `0${date}`}</h3>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  )
};

export default Card;