import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Wildfire Tracker</h1>
        </header>
    )
}

export default Header