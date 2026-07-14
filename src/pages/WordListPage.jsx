import { useState } from "react";
import NavBar from '../components/NavBar'
import { getWords, deleteWord } from '../utils/wordStorage'

import '../styles/WordListPage.css'

function WordListPage() {
  const [words, setWords] = useState(getWords());

  function handleDelete(id) {
    deleteWord(id);

    setWords(getWords());
  }

  return (
    <>
      <NavBar title="Lista haseł" />
        {words.map(word => (
          <div className="listWrapper">

            <p className="category">Kategoria: {word.category}</p>
            <p className="word">Hasło: {word.word}</p>


            <button className="delete" onClick={() => handleDelete(word.id)}>
              Usuń hasło
            </button>
          </div>
        ))}
    </>
  );
}

export default WordListPage