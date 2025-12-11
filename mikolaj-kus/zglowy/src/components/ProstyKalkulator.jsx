import React, { useState } from 'react';

export default function ProstyKalkulator() {
    const [liczba1, setLiczba1] = useState(0);
    const [liczba2, setLiczba2] = useState(0);
    const [wynik, setWynik] = useState(0);
    return (
        <>
            <h2>Prosty Kalkulator</h2>
            <input type="numeric" value={liczba1} onChange={(e) => setLiczba1(Number(e.target.value))} />
            <br></br>
            <input type="numeric" value={liczba2} onChange={(e) => setLiczba2(Number(e.target.value))} />
            <br></br>
            <button onClick={() => setWynik(liczba1 + liczba2)}>Dodaj</button>
            <h3>Wynik: {wynik}</h3>
        </>
    )
}