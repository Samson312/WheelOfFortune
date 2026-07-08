import { Link } from 'react-router-dom'

function Index() {

  return (
    <>
        <Link to="/GamePage">
            Zacznij Rozgrywkę
        </Link>

        <Link to="/WordListPage">
            Lista Słów
        </Link>

        <Link to="/AddWordPage">
            Dodaj Słowo
        </Link>
    </>
  )
}



export default Index