import { useState } from 'react'
import './Kursy.css'
import 'bootstrap/dist/css/bootstrap.css';

const Kursy = () => {
    const [numerKursu, setNumerKursu] = useState();
    const [imieNazwisko, setImieNazwisko] = useState("");
    const nazwy_kursow = [
        "Programowanie w C#",
        "Angular dla początkujących",
        "Kurs Django"
    ]
    const wypiszKonsola = () => {
        const indeks = numerKursu - 1;
        if (indeks >= 0 && indeks < nazwy_kursow.length) {
            console.log(`Imię i nazwisko: ${imieNazwisko}, Kurs: ${nazwy_kursow[indeks]}`);
        } else {
            console.log("Nieprawidłowy numer kursu");
        }
    }
    return (
    <div className='kursy'>
        <h2>Liczba kursów: {nazwy_kursow.length}</h2>
        <ol>
            {nazwy_kursow.map((kurs, index) => (
                <li key={index}>{kurs}</li>
            ))}
        </ol>
        <form>
            <div className="form-group">
                <label htmlFor="imie_nazwisko">Imię i nazwisko:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="InputImieNazwisko" 
                    value={imieNazwisko} 
                    onChange={(e) => setImieNazwisko(e.target.value)}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="numer_kursu">Numer kursu:</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="InputNumerKursu" 
                    min={1}
                    max={nazwy_kursow.length}
                    value={numerKursu} 
                    onChange={(e) => setNumerKursu(e.target.value)}
                    />
            </div>
            <button type="button" className="btn btn-primary" onClick={wypiszKonsola}>Success</button>
        </form>
    </div>
  )
}

export default Kursy