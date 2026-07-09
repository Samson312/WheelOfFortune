
function Keyboard({ onLetterClick, guessedLetters, word }) {

    const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("");

    function getLetterClass(letter){
        if (!guessedLetters.includes(letter)) {
        return "";
        }

        if (word.word.includes(letter)) {
            return "correct";
        }

        return "wrong";
    }

    return (
        <div className="keyboardContainer">
            {alphabet.map(letter => (
                <button
                    key={letter}
                    onClick={() => onLetterClick(letter)}
                    disabled = {guessedLetters?.includes(letter)}
                    className = {`letter ${getLetterClass(letter)}`}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}

export default Keyboard;