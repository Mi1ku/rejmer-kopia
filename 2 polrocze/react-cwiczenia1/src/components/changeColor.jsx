import { useState } from 'react';

const ChangeColor = () => {
    const [kolor, zmienKolor] = useState("black");
    const kolory = ["red", "blue", "green", "purple", "orange", "brown", "pink", "gray", "cyan", "magenta"];
    return (
        <div className="changeColor">
            <button onClick={() => zmienKolor(kolory[Math.floor(Math.random() * kolory.length)])}>Zmień kolor tekstu</button>
            <p style={{ color: kolor }}>KOCHAM UCZYĆ SIĘ NA INF04!</p>
        </div>
    )
}
export default ChangeColor