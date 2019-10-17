import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form';
import CardContainer from '../CardContainer/CardContainer';
import { getReservations, postReservation } from '../../apiCalls';

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
  }

  makeReservation = (information) => {
    postReservation(information)
    setTimeout(() => {
      getReservations()
        .then(reservations => this.setState({
          reservations: reservations
        }))
    }, 1000)
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation} />
        </div>
        <div className='resy-container'>
          <CardContainer reservations={reservations} />
        </div>
      </div>
    )
  }
}

export default App;
