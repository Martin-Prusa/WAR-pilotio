import { Airport } from './Airport'
import './airport-card.css'
import {IconHeart, IconCompass} from '@tabler/icons'
import { useRef, useState } from 'react'
import { Alert } from '../AlertComponent/Alert'

interface AirportCardProps {
    airport: Airport
    likeHandler: (id: number, like: boolean) => void
}

export const AirportCard = ({airport, likeHandler}: AirportCardProps) => {

    const [showCoords, setShowCoords] = useState(false)

    const handleShowCoordinates = () => {
        setShowCoords(true)
    }

    const handleLike = () => {
        airport.like = !airport.like
        likeHandler(airport.id, airport.like)
    }

    const handleAlert = (text: string) => {
        alert(text)
    }


    return (
    <div className='airport-card'>
        <div className='box' style={{width: '30%'}}>
            <div className='airport-name-text'>{airport.name}</div>
            <div className='airport-small-text'>{airport.code}</div>
        </div>
        <div className='airport-small-text box' style={{width: '15%'}}>
            <div>{airport['gps-code']}</div>
            <div>{airport.municipality}</div>
        </div>
        <div className='box' style={{width: '30%'}}>
            <button className={`airport-btn ${showCoords ? 'active' : ''}`} onClick={handleShowCoordinates}>
                {!showCoords ? 
                <div className='text'>Zobrazit souřadnice <IconCompass size={35} style={{marginLeft: 10}}></IconCompass></div> 
                : 
                <div className='text'>
                    <Alert text={`Long ${airport.long}`}><span style={{marginRight: 5}}>Long: {airport.long} </span></Alert>
                    <Alert text={`Lat: ${airport.lat}`}><span>Lat: {airport.lat} </span></Alert>
                </div>
                }
            </button>
        </div>
        <div className='box end-box'>
            <div>
                <img className='airport-image' src={airport.image} alt={airport.municipality} />
            </div>
            <div>
                <div>
                    <IconHeart onClick={handleLike} size={50} color='#369bfa' style={airport.like ? {fill: '#369bfa'} : {}}></IconHeart>
                </div>
            </div>
        </div>
    </div>
    )
}

// style={{fill: 'yellow'}}