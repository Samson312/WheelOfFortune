import { useState } from "react";
import NavBar from '../components/NavBar';
import { addWord } from "../utils/wordStorage";


function AddWordPage() {

  const [category, setCategory] = useState("");
  const [word, setWord] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    if (!word.trim()) {
      return;
    }


    addWord({
      category: category.trim(),
      word: word.toUpperCase()
    });


    setCategory("");
    setWord("");

    alert("Dodano hasło");
  }


  return (
    <>
      <NavBar title="Dodaj nowe słowo" />

      <form onSubmit={handleSubmit}>

        <label>Kategoria</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="np. owoc (Opcjonalne)"
        />

        <label>Słowo</label>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="np. jabłko"
        />

        <button type="submit">
          Dodaj
        </button>

      </form>
    </>
  )
}


export default AddWordPage;