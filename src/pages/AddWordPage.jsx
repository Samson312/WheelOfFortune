import { useState } from "react";
import NavBar from '../components/NavBar';
import { addWord } from "../utils/wordStorage";

import '../styles/AddWordPage.css'

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
    <>
      <NavBar title="Dodaj nowe hasło" />

      <form onSubmit={handleSubmit}>

        <label>Kategoria</label>

        <span className="inputWrapper">
          <input
            value={category}
            maxLength={MAX_CATEGORY_LENGTH}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="owoc (opcjonalne)"
          />
          <span className="counter">{category.length}/{MAX_CATEGORY_LENGTH}</span>
        </span>
        

        <label>Hasło</label>

        <span className="inputWrapper">
          <textarea
            value={word}
            maxLength={MAX_WORD_LENGTH}
            onChange={(e) => setWord(e.target.value)}
            placeholder="jabłko"
          />
          <span className="counter">{word.length}/{MAX_WORD_LENGTH}</span>
        </span>
        

        <button type="submit">
          Dodaj
        </button>

        <span
          className={`alert ${alert.visible ? "show" : ""} ${
            alert.isError ? "error" : "success"
          }`}
        >
          {alert.message}
        </span>

      </form>
    </>
  )
}


export default AddWordPage;