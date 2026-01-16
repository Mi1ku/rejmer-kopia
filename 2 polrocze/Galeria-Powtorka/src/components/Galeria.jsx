import 'bootstrap/dist/css/bootstrap.min.css';
import dane from '../objects/Dane.jsx';
import { useState } from 'react';

const Galeria = () => {
    const [images, setImages] = useState(dane);
    const [kategorie, setKategorie] = useState({
        Kwiaty: true,
        Zwierzeta: true,
        Samochody: true,
    });

    const filtracja = images.filter((obraz) => {
        if (kategorie.Kwiaty && obraz.category === 1) return true;
        if (kategorie.Zwierzeta && obraz.category === 2) return true;
        if (kategorie.Samochody && obraz.category === 3) return true;
        return false;
    });

    const ZmianaKategori = (kategoria) => {
        setKategorie((prevState) => ({
            ...prevState,
            [kategoria]: !prevState[kategoria],
        }));
    };

    const Pobierz = (id) => {
        setImages((prevImages) =>
            prevImages.map((obraz) =>
                obraz.id === id ? { ...obraz, downloads: obraz.downloads + 1 } : obraz
            )
        );
    };

    return (
        <div className="container mt-4 mb-4 text-start">
            <h1 className="mb-3">Kategorie zdjęć</h1>

            <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="kwiatySwitch"
                        checked={kategorie.Kwiaty}
                        onChange={() => ZmianaKategori('Kwiaty')}
                    />
                    <label className="form-check-label" htmlFor="kwiatySwitch">
                        Kwiaty
                    </label>
                </div>

                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="zwierzetaSwitch"
                        checked={kategorie.Zwierzeta}
                        onChange={() => ZmianaKategori('Zwierzeta')}
                    />
                    <label className="form-check-label" htmlFor="zwierzetaSwitch">
                        Zwierzeta
                    </label>
                </div>

                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="samochodySwitch"
                        checked={kategorie.Samochody}
                        onChange={() => ZmianaKategori('Samochody')}
                    />
                    <label className="form-check-label" htmlFor="samochodySwitch">
                        Samochody
                    </label>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {filtracja.map((obraz) => (
                    <div key={obraz.id}>
                        <div className="cardtext-center">
                            <img
                                src={`/assets/${obraz.filename}`}
                                alt={obraz.alt}
                                className="card-img-top rounded"
                            />
                            <p>Pobrań: {obraz.downloads}</p>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => Pobierz(obraz.id)}
                            >
                                Pobierz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;