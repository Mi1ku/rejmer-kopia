import { useState } from "react";

function Galeria() {
    const [kwiaty, setKwiaty] = useState(true);
    const [zwierzeta, setZwierzeta] = useState(true);
    const [samochody, setSamochody] = useState(true);

    const [dane, setDane] = useState([
        {id: 0, alt:"Mak", filename: "obraz1.jpg", category:1, downloads: 35},
        {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
        {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
        {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
        {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
        {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
        {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
        {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
        {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
        {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
        {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
        {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
    ]);


    function handlePobierz(id) {
        const nowaTablica = [...dane];
        for (let i = 0; i < nowaTablica.length; i++) {
            if (nowaTablica[i].id === id) {
                nowaTablica[i].downloads += 1;
                break;
            }
        }
    setDane(nowaTablica);
    }



    let filtered = dane.filter(item => {
        if (item.category === 1 && kwiaty) return true;
        if (item.category === 2 && zwierzeta) return true;
        if (item.category === 3 && samochody) return true;
        return false;
    });


    return (
        <>
            <h1>Kategorie zdjęć</h1>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="ctrId"
                    checked={kwiaty}
                    onChange={() => setKwiaty(!kwiaty)}
                />
                <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="ctrId2"
                    checked={zwierzeta}
                    onChange={() => setZwierzeta(!zwierzeta)}
                />
                <label className="form-check-label" htmlFor="ctrId2">Zwierzęta</label>
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="ctrId3"
                    checked={samochody}
                    onChange={() => setSamochody(!samochody)}
                />
                <label className="form-check-label" htmlFor="ctrId3">Samochody</label>
            </div>
            <div className="row">
                {filtered.map((image) => (
                    <div key={image.id} className="col mb-3">
                        <img src={`../assets/${image.filename}`} alt={image.alt} />
                        <p>Pobrań: {image.downloads}</p>
                        <button type="button" className="btn btn-success" onClick={() => handlePobierz(image.id)}>Pobierz</button>
                    </div>
                ))}
                </div>
        </>
    );
}

export default Galeria;