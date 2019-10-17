import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    const { name, date, time, number } = this.state;
    const reservation = {
      id: Date.now(),
      name,
      date,
      time,
      number: parseInt(number)
    };
    this.props.makeReservation(reservation);
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <form>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='date'
          value={date}
          placeholder='Date (MM/DD)'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='time'
          value={time}
          placeholder='Time'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='number'
          name='number'
          value={number}
          placeholder='Number of guests'
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.handleClick(event)}>
          Make Reservation
        </button>
      </form >
    )
  }
};

export default Form;