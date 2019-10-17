import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <CardContainer />
        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
