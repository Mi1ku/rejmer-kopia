import React from "react";
import { useState } from "react";

function DodajLiczby() {
    const [wynik, setWynik] = useState(0);
    const [liczba1, setLiczba1] = useState(0);
    const [liczba2, setLiczba2] = useState(0);

    return (
        <div id="kalkulator">
        <h2>Dodawanie Liczb</h2>
        <input type="number" value={liczba1} onChange={(e) => setLiczba1(Number(e.target.value))} />
        <input type="number" value={liczba2} onChange={(e) => setLiczba2(Number(e.target.value))} />
        <button onClick={() => setWynik(liczba1 + liczba2)}>Dodaj</button>
        <h3>Wynik: {wynik}</h3>        
        </div>
    )
}
export default DodajLiczby;