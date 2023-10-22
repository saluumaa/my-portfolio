import { Link } from 'react-router-dom'
import  './sidebar.scss'
import Logos from '../../assets/images/logo-s.png'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={Logos} alt="logo" />
                </Link>
        </div>
    )
}

export default Sidebar