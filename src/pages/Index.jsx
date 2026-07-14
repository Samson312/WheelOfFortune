import { Link } from 'react-router-dom'
import {getWords} from '../utils/wordStorage'

import '../styles/Index.css'

function Index() {

    const puzzles = getWords();
    const hasWords = puzzles.length > 0;

    return (
        <>
            <div className='indexContainer'>
                <h1>Koło fortuny</h1>

                <Link className={`link ${hasWords ? '' : 'disabled'}`} to="/GamePage" style={hasWords ? null : {pointerEvents: "none"}}>
                    Zacznij rozgrywkę
                </Link>

                <Link className='link' to="/WordListPage">
                    Lista haseł
                </Link>

                <Link className='link' to="/AddWordPage">
                    Dodaj hasło
                </Link>
            </div>
        </>
    )
}



export default Index