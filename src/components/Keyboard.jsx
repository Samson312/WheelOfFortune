function Keyboard({ onLetterClick, getLetterStatus, disabled }) {

    const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split("");

    return (
        <div className="keyboardContainer">
            {alphabet.map(letter => {
                const status = getLetterStatus(letter)

                return(
                    <button
                        key={letter}
                        onClick={() => onLetterClick(letter)}
                        disabled = {status !== "unused" || disabled}
                        className = {`button ${status}`}
                    >
                    {letter}
                    </button>
                )
            })}
        </div>
    );
}

export default Keyboard;