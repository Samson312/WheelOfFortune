import { useState } from "react";
import NavBar from '../components/NavBar'
import { getWords, deleteWord } from '../utils/wordStorage'

function WordListPage() {
  const [words, setWords] = useState(getWords());

  function handleDelete(id) {
    deleteWord(id);

    setWords(getWords());
  }

  return (
    <>
      <NavBar title="Lista Słów" />

      {words.map(word => (
        <div key={word.id}>
          <h1>{word.category}</h1>
          <h1>{word.word}</h1>

          <button onClick={() => handleDelete(word.id)}>
            Usuń słowo
          </button>
        </div>
      ))}
    </>
  );
}

export default WordListPage