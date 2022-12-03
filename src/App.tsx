import React, { useState } from 'react';
import './App.css';
import { Navbar } from './NavbarComponent/Navbar';
import { AirportCard } from './AirportCardComponent/AirportCard';
import { data } from './data/data';
import { IconArchive } from '@tabler/icons'
import { Alert } from './AlertComponent/Alert';

function App() {

  const [airports, setAirports] = useState(data)

  const [showFavourite, setShowFavourite] = useState(false)

  const updateAirports = (id: number, like:boolean) => {
    setAirports(airports.map(airport => {
      if(id !== airport.id) return airport
      airport.like = like
      return airport
    }))

    setShowFavourite(airports.filter(airport => airport.like).length !== 0)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='airports-container'>
        <h2>Oblíbená letiště</h2>
        {showFavourite ? airports.filter(airport => airport.like).map(airport => <AirportCard airport={airport} likeHandler={updateAirports} />) :
         <div className='no-content'>
           <div>Zatím jste nic nepřidali do oblíbených</div>
            <IconArchive size={50} />
         </div>
         }
      </div>
      <div className='airports-container' >
        <h2>Všechna letiště</h2>
        {airports.map(airport => <AirportCard airport={airport} likeHandler={updateAirports} />)}
      </div>
    </div>
  );
}

export default App;
