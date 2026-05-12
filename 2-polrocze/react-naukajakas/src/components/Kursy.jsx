import React from 'react'
import './Kursy.css'
import 'bootstrap/dist/css/bootstrap.css';

const Kursy = () => {
    const nazwy_kursow = [
        "Programowanie w C#",
        "Angular dla początkujących",
        "Kurs Django"
    ]
    return (
    <div className='kursy'>
        <h2>Liczba kursów: {nazwy_kursow.length}</h2>
        <ol>
            {nazwy_kursow.map((kurs, index) => (
                <li key={index}>{kurs}</li>
            ))}
        </ol>
        <form>
            <div class="form-group">
                <label for="imie_nazwisko">Imię i nazwisko:</label>
                <input type="text" class="form-control" id="InputImieNazwisko" />
            </div>
            <div class="form-group">
                <label for="numer_kursu">Numer kursu:</label>
                <input type="number" class="form-control" id="InputLiczbaKursow" />
            </div>
            <button type="submit" class="btn btn-primary">Success</button>
        </form>
    </div>
  )
}

export default Kursy