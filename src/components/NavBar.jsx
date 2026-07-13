import { Link } from 'react-router-dom'

import '../styles/navbar.css'

function NavBar({title}) {
  return (
    <div className='navbar'>
        <Link to="/" className='return'>
            ←
        </Link>

        <h1>{title}</h1>
    </div>
  )
}



export default NavBar