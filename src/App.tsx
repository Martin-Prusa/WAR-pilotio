import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './NavbarComponent/Navbar';
import { AirportCard } from './AirportCardComponent/AirportCard';
import { data } from './data/data';
import { Airport } from './AirportCardComponent/Airport';

function App() {

  const airports: Airport[] = data


  return (
    <div className="App">
      <Navbar />
      <div className='airports-container'>
        <h2>Oblíbená letiště</h2>
      </div>
      <div className='airports-container' >
        <h2>Všechna letiště</h2>
        {airports.map(airport => <AirportCard airport={airport} />)}
      </div>
    </div>
  );
}

export default App;
