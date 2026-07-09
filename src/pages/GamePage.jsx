import { useState } from "react";
import NavBar from '../components/NavBar'
import Keyboard from "../components/Keyboard"
import { getWords } from '../utils/wordStorage'

import '../gamePage.css'

function GamePage() {

    const [word] = useState(() => {
        const words = getWords();

        return words[
            Math.floor(Math.random() * words.length)
        ];
    });

    const [guessedLetters, setGuessedLetters] = useState([]);

    function guessLetter(letter) {

        if (guessedLetters.includes(letter)) {
            return;
        }

        setGuessedLetters([
            ...guessedLetters,
            letter
        ]);
    }

    function generatePassword(){
        const answer = word?.word.split(" ")

        return(
            <div className="wordContainer">
                {answer.map((singleWord, wordIndex) => (
                    <div key={wordIndex} className="singleWord">
                        {singleWord.split("").map((letter, letterIndex) => (
                            <div key={letterIndex}>
                                {guessedLetters.includes(letter)
                                    ? letter
                                    : "_"}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <NavBar title={`Kategoria: ${word?.category}`} ></NavBar>

            {generatePassword()}

            <Keyboard onLetterClick={guessLetter} guessedLetters={guessedLetters} word={word}/>
        </>
    )
}

export default GamePage