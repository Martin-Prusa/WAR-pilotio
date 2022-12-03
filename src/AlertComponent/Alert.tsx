import './alert.css'
import {IconClipboardList} from '@tabler/icons'

interface AlertProps {
    onClose: () => void
    text: string
}

export const Alert = ({onClose, text}: AlertProps) => {

    const handleCopyText = () => {

    }

    return (
    <div className="alert">
        <div className='alert-header'>Alert</div>
        <div className='alert-content'>
            <div>{text}</div>
            <button onClick={handleCopyText}><IconClipboardList /></button>
        </div>
        <div className='alert-footer'>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
    )
}