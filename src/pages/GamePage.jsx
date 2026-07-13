import { useState } from "react";
import NavBar from '../components/NavBar'
import Keyboard from "../components/Keyboard"
import Board from "../components/Board";
import { getWords } from '../utils/wordStorage'

import '../gamePage.css'

function GamePage() {

    const [puzzle] = useState(() => {
        const puzzles = getWords();

        return puzzles[
            Math.floor(Math.random() * puzzles.length)
        ];
    });

    const answer = puzzle?.word.split(" ")

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

    function getLetterStatus(letter)
    {
        if (!guessedLetters.includes(letter)) {
        return "unused";
        }

        return puzzle.word.includes(letter)
            ? "correct"
            : "wrong";
    }

    function isLetterGuessed(letter){
        return guessedLetters.includes(letter)
    }

    return (
        <div className="container">
            <NavBar title={puzzle.category == "" ? "" : `Kategoria: ${puzzle?.category}`} ></NavBar>

            <Board answer={answer} isLetterGuessed={isLetterGuessed}/>

            <Keyboard onLetterClick={guessLetter} getLetterStatus={getLetterStatus}/>
        </div>
    )
}

export default GamePage