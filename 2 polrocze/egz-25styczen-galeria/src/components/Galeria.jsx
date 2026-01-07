import { useState } from "react";
import dane from "../objects/dane.jsx";
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

    const ZmianaKategorii = (nazwaKategorii) => {
        setKategorie(x => ({
            ...x,
            [nazwaKategorii]: !x[nazwaKategorii]
        })
        )
    }

    function Pobierz (idObrazka) {
        setObrazki(e =>
            e.map(
                obrazek => obrazek.id === idObrazka ? 
                { ...obrazek, downloads: obrazek.downloads + 1 } 
                : obrazek
            )
        )
    }

    return (
        <div className="galeria">
            <h2>Kategorie zdjęć</h2>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="ctrId" />
                <label 
                class="form-check-label" 
                for="ctrId" 
                checked={kategorie.kwiaty}
                onChange={() => { ZmianaKategorii('kwiaty') }}
                >
                    Kwiaty
                </label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="ctrId" />
                <label 
                class="form-check-label" 
                for="ctrId" 
                checked={kategorie.zwierzeta}
                onChange={() => { ZmianaKategorii('zwierzeta') }}
                >
                    Kwiaty
                </label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="ctrId" />
                <label 
                class="form-check-label" 
                for="ctrId" 
                checked={kategorie.samochody}
                onChange={() => { ZmianaKategorii('samochody') }}
                >
                    Kwiaty
                </label>
            </div>
            <div className="row">
                
            </div>
        </div>
    )
}