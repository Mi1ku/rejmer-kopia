import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [opcja, setOpcja] = useState("");
  const rodzaje = [
    "",
    "Komedia",
    "Obyczajowy",
    "Sensacyjny",
    "Horror"
  ]
  const WypiszKonsolka = () => {
      console.log(`tytul: ${title} kategoria: ${opcja}`);
  }

  return (
    <>
      <form className="p-3">
        <div className="form-group mb-3">
          <label htmlFor="inputTitle">Tytuł filmu</label>
          <input 
            type="text" 
            className="form-control"
            id="inputTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="selectRodzaj">Rodzaj</label>
          <select 
            className="form-control" 
            id="selectRodzaj"
            value={opcja}
            onChange={(e) => setOpcja(e.target.value)}
          >
            {rodzaje.map((rodzaj, index) => (
              <option key={index}>
                {rodzaj}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={WypiszKonsolka}>Dodaj</button>
      </form>
    </>
  )
}

export default App