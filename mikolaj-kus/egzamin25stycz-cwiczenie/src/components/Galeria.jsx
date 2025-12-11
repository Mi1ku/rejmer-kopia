import { useState } from 'react';
import dane from '../objects/dane.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function Galeria() {
    const [obrazki, setObrazki] = useState(dane);
    const [kategorie, setKategorie] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    });

    const filtracja = () => {
        return obrazki.filter((image) => {
            if (kategorie.kwiaty && image.category === 1) return true;
            if (kategorie.zwierzeta && image.category === 2) return true;
            if (kategorie.samochody && image.category === 3) return true;
            return false;
        });
    }

    function ZmianaKategori(nazwaKategorii) {
        setKategorie(x => ({
            ...x,
            [nazwaKategorii]: !x[nazwaKategorii]
        }));
    }
    function Pobierz(idObrazka) {
        setObrazki(e =>
            e.map(
                obrazek =>
                    obrazek.id === idObrazka
                        ? { ...obrazek, downloads: obrazek.downloads++ }
                        : obrazek
            )
        );
    }

    return (
        <div> 
            <h1 className="kategoriezdjec">Kategorie zdjęć</h1>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="Kwiaty"
                    checked={kategorie.kwiaty}
                    onChange={() => { ZmianaKategori('kwiaty') }}
                />
                <label
                    className="form-check-label"
                    htmlFor="Kwiaty"
                >
                    Kwiaty
                </label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="Zwierzęta"
                    checked={kategorie.zwierzeta}
                    onChange={() => { ZmianaKategori('zwierzeta') }}
                />
                <label
                    className="form-check-label"
                    htmlFor="Zwierzęta"
                >
                    Zwierzęta
                </label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="Samochody"
                    checked={kategorie.samochody}
                    onChange={() => { ZmianaKategori('samochody') }}
                />
                <label
                    className="form-check-label"
                    htmlFor="Samochody"
                >
                    Samochody
                </label>
            </div>
            <div className="row">
                {filtracja().map((image) => (
                    <div className="col-md-4 mb-4" key={image.id}>
                        <div className="h-100">
                            <img
                                src={`/assets/${image.filename}`}
                                alt={image.alt}
                                className="card-img-top custom-image-style"
                            />
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