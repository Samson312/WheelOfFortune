import { Link } from 'react-router-dom'
import {getWords} from '../utils/wordStorage'

import styles from '../styles/pages/index.module.css'

function Index() {

    const puzzles = getWords();
    const hasWords = puzzles.length > 0;

    return (
        <>
            <div className={`page ${styles.container}`}>
                <h1 className={styles.title}>Koło fortuny</h1>

                <Link className={`btn ${styles.menuLink} ${hasWords ? '' : styles.disabled}`} to="/GamePage">
                    Zacznij rozgrywkę
                </Link>

                <Link className={`btn ${styles.menuLink}`} to="/WordListPage">
                    Lista haseł
                </Link>

                <Link className={`btn ${styles.menuLink}`} to="/AddWordPage">
                    Dodaj hasło
                </Link>
            </div>
        </>
    )
}



export default Index