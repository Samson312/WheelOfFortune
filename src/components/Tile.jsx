function Tile({ key, letter, isLetterGuessed }) {

    return (
        <div key={key} className="tile">
            <div className={`letter ${isLetterGuessed(letter) ? "visable" : "hidden"}`}>{letter}</div>
        </div>
    );
}

export default Tile;