import React from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';

const CardContainer = ({ reservations, cancelReservation }) => {

  const displayReservations =
    reservations.map(reservation => {
      const { id, name, date, time, number } = reservation;
      return <Card
        key={id}
        id={id}
        name={name}
        date={date}
        time={time}
        number={number}
        cancelReservation={cancelReservation}
      />
    })

  return (
    < section >
      {displayReservations}
    </section >
  )
}

export default CardContainer;