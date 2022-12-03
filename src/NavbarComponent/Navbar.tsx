import {IconPlaneDeparture} from '@tabler/icons'
import './navbar.css'

export const Navbar = () => {
    return (
    <nav className='navbar'>
        <IconPlaneDeparture size={50} color='#369bfa'></IconPlaneDeparture>
        <div className='pilot-container'>
            <div className='pilot-info'>
                <div>Samwise Gamgee</div>
                <div className='pilot-text'>Pilot</div>
            </div>
            <div>
                <img className='pilot-image' src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="Samwise Gamgee" />
            </div>
        </div>
    </nav>
    )
}