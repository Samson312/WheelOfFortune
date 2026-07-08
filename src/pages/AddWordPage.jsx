import NavBar from '../components/NavBar'

function AddWordPage() {

  return (
    <>
        <NavBar title="Dodaj nowe słowo" ></NavBar>

        <label>Kategoria</label>
        <input placeholder="np. owoc (Opcjonalne)"></input>

        <label>Słowo</label>
        <input placeholder="np. jabłko"></input>

        <button>Dodaj</button>
    </>
  )
}

export default AddWordPage