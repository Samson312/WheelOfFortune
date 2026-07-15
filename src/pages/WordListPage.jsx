import { useState } from "react";
import Navbar from '../components/Navbar'
import { getWords, deleteWord } from '../utils/wordStorage'

import styles from '../styles/pages/wordList.module.css'

function WordListPage() {
  const [words, setWords] = useState(getWords());

  function handleDelete(id) {
    deleteWord(id);

    setWords(getWords());
  }

  return (
    <div className={`page ${styles.container}`}>

      <Navbar title="Lista haseł" />
        {words.map(word => (
          <div className={styles.listWrapper}>

            <p className={styles.category}>Kategoria: {word.category}</p>
            <p className={styles.word}>Hasło: {word.word}</p>


            <button className={`btn ${styles.delete}`} onClick={() => handleDelete(word.id)}>
              Usuń hasło
            </button>
          </div>
        ))}
        
    </div>
  );
}

export default WordListPage