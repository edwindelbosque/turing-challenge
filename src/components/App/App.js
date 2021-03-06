import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form';
import CardContainer from '../CardContainer/CardContainer';
import { getReservations, postReservation, deleteReservation } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(reservations => this.setState({
        reservations: reservations
      }))
      .catch(error => console.warning(error))
  }

  makeReservation = (information) => {
    postReservation(information)
    setTimeout(() => {
      getReservations()
        .then(reservations => this.setState({
          reservations: reservations
        })).catch(error => console.warning(error))
    }, 50)
  }

  cancelReservation = (id) => {
    deleteReservation(id);
    setTimeout(() => {
      getReservations()
        .then(reservations => this.setState({
          reservations: reservations
        })).catch(error => console.warning(error))
    }, 50)
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form makeReservation={this.makeReservation} />
        <div className='resy-container'>
          <CardContainer
            reservations={reservations}
            cancelReservation={this.cancelReservation} />
        </div>
      </div>
    )
  }
}

export default App;
