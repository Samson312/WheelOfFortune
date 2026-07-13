import Tile from "./Tile";

function Board({ answer, isLetterGuessed }) {

    return (
        <div className="board">
            {answer.map((singleWord, wordIndex) => (
                <div key={wordIndex} className="singleWord">
                    {singleWord.split("").map((letter, letterIndex) => (
                        <Tile key={letterIndex} letter={letter} isLetterGuessed={isLetterGuessed} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;