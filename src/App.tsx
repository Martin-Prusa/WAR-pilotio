import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './NavbarComponent/Navbar';
import { AirportCard } from './AirportCardComponent/AirportCard';
import { data } from './data/data';
import { Airport } from './AirportCardComponent/Airport';

function App() {

  const [airports, setAirports] = useState(data)

  const updateAirports = (id: number, like:boolean) => {
    console.log('update');
    setAirports(airports.map(airport => {
      if(id !== airport.id) return airport
      airport.like = like
      return airport
    }))
  }

  return (
    <div className="App">
      <Navbar />
      <div className='airports-container'>
        <h2>Oblíbená letiště</h2>
        {airports.filter(airport => airport.like).map(airport => <AirportCard airport={airport} likeHandler={updateAirports} />)}
      </div>
      <div className='airports-container' >
        <h2>Všechna letiště</h2>
        {airports.map(airport => <AirportCard airport={airport} likeHandler={updateAirports} />)}
      </div>
    </div>
  );
}

export default App;
