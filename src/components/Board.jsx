import Tile from "./Tile.jsx";

import styles from "../styles/components/board.module.css"

function Board({ answer, isLetterGuessed }) {

    const revealOrder = {};

    return (
        <div className={styles.board}>
            {answer.map((word, wordIndex) => (
                <div key={wordIndex} className={styles.word}>
                    {word.split("").map((letter, letterIndex) => {
                        
                        const revealDelay = revealOrder[letter] ?? 0;
                        revealOrder[letter] = revealDelay + 1;

                        return(
                            <Tile key={letterIndex} revealDelay={revealDelay * 1000} letter={letter} isLetterGuessed={isLetterGuessed} />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

export default Board;