import { Link } from 'react-router-dom'

function NavBar({title}) {
  return (
    <div>
        <Link to="/">
            Strzałka
        </Link>

        <h1>{title}</h1>
    </div>
  )
}



export default NavBar