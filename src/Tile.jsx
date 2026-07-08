function Tile({letter,type = ""}) {

  return (
      <div className={`tile ${type}`}>
        {letter}
      </div>
  )
}

export default Tile
