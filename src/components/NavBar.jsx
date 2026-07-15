import { Link } from 'react-router-dom'

import styles from '../styles/components/navbar.module.css'

function NavBar({title}) {
  return (
    <div className={styles.navbar}>
        <Link to="/" className={styles.return}>
            ←Powrót
        </Link>

        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}



export default NavBar