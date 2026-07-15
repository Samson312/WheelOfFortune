import { useState } from "react";
import Navbar from '../components/Navbar.jsx';
import { addWord } from "../utils/wordStorage";

import styles from '../styles/pages/addWord.module.css'

function AddWordPage() {

  const MAX_CATEGORY_LENGTH = 20;
  const MAX_WORD_LENGTH = 50;

  const [category, setCategory] = useState("");
  const [word, setWord] = useState("");

  const [alert, setAlert] = useState({
  message: "",
  isError: false,
  visible: false,
  });

  function showAlert(message, isError = false) {
    setAlert({
      message,
      isError,
      visible: true,
    });

    setTimeout(() => {
      setAlert(prev => ({
        ...prev,
        visible: false,
      }));
    }, 2500);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!word.trim()) {
      showAlert("Wpisz hasło!", true)
      return;
    }

    if(word.length > MAX_WORD_LENGTH){
      showAlert("Za długie hasło!", true)
      return;
    }

    if(category.length > MAX_CATEGORY_LENGTH){
      showAlert("Za długa nazwa kategori!", true)
      return;
    }

    addWord({
      category: category.trim(),
      word: word.toUpperCase()
    });


    setCategory("");
    setWord("");

    showAlert("Dodano hasło!");
  }

  return (
    <div className={`page ${styles.container}`}>
      <Navbar title="Dodaj nowe hasło" />

      <form className={styles.wordForm} onSubmit={handleSubmit}>

        <label className={styles.formLabel} >Kategoria</label>

        <span className={styles.inputWrapper}>
          <input
            className={styles.inputField}
            value={category}
            maxLength={MAX_CATEGORY_LENGTH}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="owoc (opcjonalne)"
          />
          <span className={styles.letterCount}>{category.length}/{MAX_CATEGORY_LENGTH}</span>
        </span>
        

        <label className={styles.formLabel}>Hasło</label>

        <span className={styles.inputWrapper}>
          <textarea
            className={`${styles.inputField} ${styles.wordInputField}`}
            value={word}
            maxLength={MAX_WORD_LENGTH}
            onChange={(e) => setWord(e.target.value)}
            placeholder="jabłko"
          />
          <span className={styles.letterCount}>{word.length}/{MAX_WORD_LENGTH}</span>
        </span>
        

        <button className={`btn ${styles.submitBtn}`} type="submit">
          Dodaj
        </button>

        <span
          className={`${styles.alert} ${alert.visible ? styles.show : ""} ${
            alert.isError ? styles.error : styles.success
          }`}
        >
          {alert.message}
        </span>

      </form>
    </div>
  )
}


export default AddWordPage;