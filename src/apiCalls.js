
export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => reservations)
    .catch(error => console.warning(error))
}

export const postReservation = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation)
  })
    .then(response => response.json())
    .then(reservation => reservation)
    .catch(error => console.warning(error))
}

export const deleteReservation = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'delete'
  })
}