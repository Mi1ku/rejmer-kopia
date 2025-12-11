import react from "react";
import { useState } from "react";

function Licznik() {
    const [ile, setIle] = react.useState(0);

    function dodaj() {
        setIle(ile + 1);
    }
    return (
        <>
        <h2>Licznik kliknięć</h2>
        <button onClick={dodaj}>Dodaj</button>
        <h2>Licznik: {ile}</h2>
        </>
    )
}
export default Licznik;