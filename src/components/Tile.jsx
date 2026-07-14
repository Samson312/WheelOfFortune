function Tile({ key, revealDelay, letter, isLetterGuessed }) {

    let guessed = isLetterGuessed(letter);

    return (
        <div key={key} className={`tile ${guessed ? "revealed" : ""}`} style={{
                animationDelay: `${revealDelay}ms`
            }}>
            <div className={`letter ${guessed ? "visable" : "hidden"}`} style={{
                animationDelay: `${revealDelay}ms`}}
            >{letter}</div>
        </div>
    );
}

export default Tile;