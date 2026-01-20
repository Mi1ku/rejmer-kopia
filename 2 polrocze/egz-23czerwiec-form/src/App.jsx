import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const Rodzaje = [
    { id: 0, nazwa: '' },
    { id: 1, nazwa: 'Komedia' },
    { id: 2, nazwa: 'Obyczajowy' },
    { id: 3, nazwa: 'Sensacyjny' },
    { id: 4, nazwa: 'Horror' }
  ]

  const Konsola = () => {
    let tytul = tytulFilmu.value
    let rodzaj = rodzajFilmu.value
    console.log(`tytul: ${tytul}; rodzaj: ${rodzaj}`)
  }

  return (
    <>
      <form>
        <div className="form-group p-5">
          <label for="tytulFilmu">Tytuł filmu</label>
          <input type="text" className="form-control" id="tytulFilmu"/>
          <label for="rodzajFilmu">Rodzaj</label>
          <select className="form-control" id="rodzajFilmu">
            {Rodzaje.map((rodzaj) => (
              <option key={rodzaj.id} value={rodzaj.id}>{rodzaj.nazwa}</option>
            ))}
          </select>
          <button type="button" className="btn btn-primary" onClick={Konsola}>Dodaj</button>
        </div>
      </form>
    </>
  )
}

export default App
