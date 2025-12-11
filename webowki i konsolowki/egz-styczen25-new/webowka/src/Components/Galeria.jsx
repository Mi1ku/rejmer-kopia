// Importowanie useState z React
import { useState } from "react"
// Importowanie danych z pliku dane.jsx
import dane from "../objects/dane.jsx"
// Importowanie stylów CSS dla Obrazów
import "./style.css"

// Definicja komponentu Galeria
export default function Galeria() {
    // Inicjalizacja stanu dla obrazów
    const [images, setImages] = useState(dane);
    // Inicjalizacja stanu początkowego dla switchy kategorii
    const [kategoria, setKategoria] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    });
    // Funkcja do zmiany stanu kategorii
    const ZmianaKategori = (nazwakategorii) => {
        setKategoria(x => ({
            ...x, // Kopiowanie istniejącego stanu
            [nazwakategorii]: !x[nazwakategorii] // Przełączanie wartości wybranej kategorii
        }));
    }
    // Funkcja do obsługi pobierania obrazka
    const Pobierz = (idObrazka) => {
        setImages(e =>
            e.map(obrazek => obrazek.id === idObrazka ? { ...obrazek, downloads: obrazek.downloads + 1 } : obrazek) // Zwiększanie liczby pobrań dla wybranego obrazka
        );
    }
    // Filtrowanie obrazów na podstawie wybranych kategorii
    const filtracja = images.filter((image) => {
        if (kategoria.kwiaty && image.category === 1) return true;
        if (kategoria.zwierzeta && image.category === 2) return true;
        if (kategoria.samochody && image.category === 3) return true;
        return false;
    });
    return (
        <div className="container mt-4">
            {/* Nagłówek kategorii zdjęć */}
            <h1 className="kategoriezdjec">Kategorie zdjęć</h1>

            {/* Div z flexem i wyrównaniem do lewej oraz odstępem 4 px i marginesem dolnym 4 px */}
            <div className="d-flex justify-content-left gap-4 mb-4">
                {/* Switch dla kategorii Kwiaty */}
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="Kwiaty"
                        checked={kategoria.kwiaty}
                        onChange={() => { ZmianaKategori('kwiaty') }}
                    />
                    <label className="form-check-label" htmlFor="Kwiaty">Kwiaty</label>
                </div>

                {/* Switch dla kategorii Zwierzęta */}
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="Zwiereta"
                        checked={kategoria.zwierzeta}
                        onChange={() => { ZmianaKategori('zwierzeta') }}
                    />
                    <label className="form-check-label" htmlFor="Zwiereta">Zwierzęta</label>
                </div>

                {/* Switch dla kategorii Samochody */}
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="Samochody"
                        checked={kategoria.samochody}
                        onChange={() => { ZmianaKategori('samochody') }}
                    />
                    <label className="form-check-label" htmlFor="Samochody">Samochody</label>
                </div>
            </div>

            <div className="row">
                {/* Mapowanie przefiltrowanych obrazów i wyświetlanie ich */}
                {filtracja.map((image) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={image.id}>
                        <div className="h-100">
                            {/* Wyświetlanie obrazka z odpowiednimi atrybutami */}
                            <img
                                src={`/assets/${image.filename}`}
                                alt={image.alt}
                                className="card-img-top custom-image-style"
                            />
                            {/* Wyświetlanie liczby pobrań i przycisku do pobierania */}
                            <h4>Pobrań: {image.downloads}</h4>
                            <button
                                className="btn btn-success"
                                onClick={() => { Pobierz(image.id) }}
                            >
                                Pobierz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}