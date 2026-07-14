import Tile from "./Tile";

function Board({ answer, isLetterGuessed }) {

    const revealOrder = {};

    return (
        <div className="board">
            {answer.map((singleWord, wordIndex) => (
                <div key={wordIndex} className="singleWord">
                    {singleWord.split("").map((letter, letterIndex) => {
                        
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