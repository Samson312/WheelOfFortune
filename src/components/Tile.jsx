import styles from "../styles/components/tile.module.css"

function Tile({ key, revealDelay, letter, isLetterGuessed }) {

    let guessed = isLetterGuessed(letter);

    return (
        <div key={key} className={`${styles.letterTile} ${guessed ? styles.revealed : ""}`} style={{
                animationDelay: `${revealDelay}ms`
            }}>
            <div className={`${styles.letter} ${guessed ? styles.visible : styles.hidden}`} style={{
                animationDelay: `${revealDelay}ms`}}
            >{letter}</div>
        </div>
    );
}

export default Tile;