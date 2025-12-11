import React, { useState } from "react";

export default function ZmianaKoloru() {
    const kolory = ["red", "blue", "green", "yellow", "purple", "orange"];
    const [kolor, setKolor] = useState("black");

    function losujKolor() {
        const index = Math.floor(Math.random() * kolory.length);
        setKolor(kolory[index]);
    }
    return (
        <div>
            <p style={{ color: kolor }}>Ten tekst zmienia kolor</p>
            <button onClick={losujKolor}>Zmień kolor</button>
        </div>
    )
}