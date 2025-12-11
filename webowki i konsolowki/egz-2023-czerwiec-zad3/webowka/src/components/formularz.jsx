// Importowanie potrzebnych bibliotek
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

// Definicja komponentu Formularz
const Formularz = () => {
    // Definicja stanów dla tytułu i rodzaju filmu
    const [tytul, setTytul] = useState('')
    const [rodzaj, setRodzaj] = useState('')

    // Funkcja obsługująca kliknięcie przycisku "Dodaj"
    const Konsola = () => {
        console.log(`tytul: ${tytul}; rodzaj: ${rodzaj}`)
    }

    return (
        // Div z klasami Bootstrap do stylizacji formularza
        <div className="container">
            <div className="row justify-content-center p-20">
                <div className="col-md-6">
                    <form>
                        <div className="form-group mb-3">
                            {/* Etykieta i pole tekstowe dla tytułu filmu */}
                            <label htmlFor="tytul">Tytuł filmu</label>
                            <input
                                id="tytul"
                                type="text"
                                className="form-control"
                                value={tytul}
                                onChange={e => setTytul(e.target.value)}
                            />
                        </div>
                        {/* Etykieta i pole wyboru dla rodzaju filmu */}
                        <div className="form-group mb-3">
                            <label htmlFor="rodzaj">Rodzaj</label>
                            <select
                                id="rodzaj"
                                className="form-control"
                                value={rodzaj}
                                onChange={e => setRodzaj(e.target.value)}
                            >
                                {/* Opcje wyboru rodzaju filmu */}
                                <option value="0"></option>
                                <option value="1">Komedia</option>
                                <option value="2">Obyczajowy</option>
                                <option value="3">Sensacyjny</option>
                                <option value="4">Horror</option>
                            </select>
                        </div>
                        {/* Przycisk do dodawania filmu */}
                        <button type="button" className="btn btn-primary" onClick={Konsola}>
                            Dodaj
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Eksportowanie komponentu Formularz
export default Formularz