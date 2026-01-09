// Importujemy react i usestate
import { useState } from 'react';
// Importujemy style
import './style.css';
// importujemy bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importujemy dane z pliku jsx
import dane from '../objects/dane.jsx';

// komponent funkcyjny Galeria
const Galeria = () => {
    // stan komponentu - tablica obrazkow
    const [images, setImages] = useState(dane);
    // Stan przechowujacy ktore kategorie sa zaznaczone
    const [kategorie, setKategorie] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    });

    // funkcja przelaczajaca stan danej kategorii
    // np. jeśli kwiaty były true - zmieni się na false
    const zmianaKategorii = (nazwaKategorii) => {
        setKategorie(x => ({
            ...x, // kopiujemy poprzedni stan
            [nazwaKategorii]: !x[nazwaKategorii] // zmieniamy wartosc danej kategorii
        }));
    }

    // tworzymy nową listę obrazow przefiltrowana na podstawie zaznaczonych kategorii
    const filtracja = images.filter(image => {
        if (image.category === 1 && kategorie.kwiaty) return true;
        if (image.category === 2 && kategorie.zwierzeta) return true;
        if (image.category === 3 && kategorie.samochody) return true;
        return false;
    });
    
    // Funkcja zwiekszajaca licznik pobran dla danego obrazka
    const pobierz = (idObrazka) => {
        setImages(x => 
            x.map(obrazek => 
                obrazek.id === idObrazka
                ? {...obrazek, downloads: obrazek.downloads + 1} // zwiekszamy licznik pobran
                : obrazek // zwracamy bez zmian
            )
        );
    };

    return (
        <>
            <h1>Kategorie zdjęć</h1>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="kwiatyId"
                    checked={kategorie.kwiaty}
                    onChange={() => zmianaKategorii('kwiaty')}
                />
                <label className="form-check-label" htmlFor="kwiatyId">
                    Kwiaty
                </label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="zwierzetaId"
                    checked={kategorie.zwierzeta}
                    onChange={() => zmianaKategorii('zwierzeta')}
                />
                <label className="form-check-label" htmlFor="zwierzetaId">
                    Zwierzęta
                </label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="samochodyId"
                    checked={kategorie.samochody}
                    onChange={() => zmianaKategorii('samochody')}
                />
                <label className="form-check-label" htmlFor="samochodyId">
                    Samochody
                </label>
            </div>
            {filtracja.map(image => (
                <div key={image.id}>
                    <img
                        src={`/assets/${image.filename}`}
                        alt={image.alt}
                    />
                    <br />
                    Pobrań: {image.downloads}
                    <br />
                    <button type="button" class="btn btn-success" onClick={() => pobierz(image.id)}>Pobierz</button>
                    <hr />
                </div>
            ))}
        </>
    );

}

export default Galeria;