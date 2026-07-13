function Keyboard({ onLetterClick, getLetterStatus }) {

    const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("");

    return (
        <div className="keyboardContainer">
            {alphabet.map(letter => {
                const status = getLetterStatus(letter)

                return(
                    <button
                        key={letter}
                        onClick={() => onLetterClick(letter)}
                        disabled = {status !== "unused"}
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