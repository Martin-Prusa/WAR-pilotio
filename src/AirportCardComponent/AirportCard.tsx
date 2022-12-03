import { Airport } from './Airport'
import './airport-card.css'
import {IconHeart, IconCompass} from '@tabler/icons'

interface AirportCardProps {
    airport: Airport
}

export const AirportCard = ({airport}: AirportCardProps) => {
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
        <div className='box'>
            <button className='airport-btn'>
                <div>
                    Zobrazit součadnice
                </div>
                <IconCompass size={35}></IconCompass>   
            </button>
        </div>
        <div className='box end-box'>
            <div>
                <img className='airport-image' src={airport.image} alt={airport.municipality} />
            </div>
            <div>
                <div>
                    <IconHeart size={50} color='#369bfa' ></IconHeart>
                </div>
            </div>
        </div>
    </div>
    )
}

// style={{fill: 'yellow'}}