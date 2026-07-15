import styles from '../styles/components/keyboard.module.css'

function Keyboard({ onLetterClick, getLetterStatus, disabled }) {

    const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split("");

    return (
        <div className={styles.keyboard}>
            {alphabet.map(letter => {
                const status = getLetterStatus(letter)

                return(
                    <button
                        key={letter}
                        onClick={() => onLetterClick(letter)}
                        disabled = {status !== "unused" || disabled}
                        className = {`btn ${styles.button} ${status !== "unused" ? styles[status] : ""}`}
                    >
                    {letter}
                    </button>
                )
            })}
        </div>
    );
}

export default Keyboard;