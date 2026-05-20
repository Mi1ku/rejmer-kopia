// importuje se usestate
import {useState} from "react"
// importuje se bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// importuje se style
import "./style.css"
// importuje se dane
import dane from "../objects/dane"

const Galeria = () => {
    const [images, setimages] = useState(dane)
    /*
    domyslne przypisanie
    stanow switchy z kategoriami na wlaczone
    */
    const [kategorie, setkategorie] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    })


    /*
    Funkcja ktora zmienia kategorie przyjmujac jako argument nazwe Kategori
    wewnatrz ustawia ona kategorie na poprzedni stan oraz Kategorie na inna 
    niz inne 
    */
    const zmianaKategorii = (nazwaKategorii) => {
        setkategorie(x => ({
                ...x,
                [nazwaKategorii]: !x[nazwaKategorii]
            }
            )
        )
    }

    /*
    Filtrowanie zdjec dla kazdego zdjecia
    jesli kategoria zdjecia jest rowna danej liczbie i nia jest 
    porownoajac stan z pliku dane i z stanow switchy to ma byc wyswietlona
    */
    const filtracja = images.filter(image => {
        if (image.category === 1 && kategorie.kwiaty) return true;
        if (image.category === 2 && kategorie.zwierzeta) return true;
        if (image.category === 3 && kategorie.samochody) return true;
        return false;
    });

    /*
    przycisk pobierania ktory bierze id obrazka 
    i ustawia obrazki na poprzednim stanie i je mapuje
    oraz poroownej id obrazka z danych do idobrazka z parametru funkcji
    jesli sa rowne to zwraca obrazek z poprzednim stanem i dodaje 1 do pobrania
    */
    const pobierz = (idObrazka) => {
        setimages(x => 
            x.map(obrazek => 
                obrazek.id === idObrazka
                ? {...obrazek, downloads: obrazek.downloads + 1}
                : obrazek 
            )
        );
    };
    return (
        <>
            <h1>Kategorie zdjęć</h1>
            <div className="form-check form-switch" id="switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="ctrId" 
                    checked={kategorie.kwiaty}
                    onChange={() => zmianaKategorii("kwiaty")}
                />
                <label 
                    className="form-check-label" 
                    htmlFor="ctrId"
                >
                        Kwiaty
                </label>
            </div>
            <div className="form-check form-switch" id="switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="ctrId" 
                    checked={kategorie.zwierzeta}
                    onChange={() => zmianaKategorii("zwierzeta")}
                />
                <label 
                    className="form-check-label" 
                    htmlFor="ctrId"
                >
                        Zwierzęta
                </label>
            </div>
            <div className="form-check form-switch" id="switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="ctrId" 
                    checked={kategorie.samochody}
                    onChange={() => zmianaKategorii("samochody")}
                />
                <label 
                    className="form-check-label" 
                    htmlFor="ctrId"
                >
                        Samochody
                </label>
            </div>
            {/*
            mapowanie zdjec z filtracji
            */}
            {filtracja.map(image => (
                <div key={image.id}>
                    {/* wyswietlanie obrazka z danych */}
                    <img
                        src={`${image.filename}`}
                        alt={image.alt}
                        className="img imgcard"
                    />
                    <br />
                    {/* wyswietlanie pobran z danych */}
                    Pobrań: {image.downloads}
                    <br />
                    {/* przycisk pobierania z funkcja pobierz i id obrazka jako argument */}
                    <button type="button" class="btn btn-success" onClick={() => pobierz(image.id)}>Pobierz</button>
                    <hr />
                </div>  
            ))}
        </>
    )
}

export default Galeria