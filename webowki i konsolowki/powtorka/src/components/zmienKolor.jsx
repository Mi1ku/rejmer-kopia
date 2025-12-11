import React, { useState } from "react";

function ZmienKolor() {
    const kolory = ["red", "blue", "green", "orange", "purple"];
    const [textKolor, setTextKolor] = useState("black");

    const zmienKolor = () => {
        const random = Math.floor(Math.random() * kolory.length);
        setTextKolor(kolory[random]);
    };

    return (
        <div>
            <p style={{ color: textKolor }}>Ten tekst zmienia kolor</p>
            <button onClick={zmienKolor}>Zmień kolor</button>
        </div>
    );
}

export default ZmienKolor;
