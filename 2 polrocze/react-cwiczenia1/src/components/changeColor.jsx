import { useState } from 'react';

/*
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
*/
const ChangeColor = () => {
    const [color, setColor] = useState("red");

    const changeColor = () => {
        const colors = ["green","blue","pink","gray","cyan","magenta"];
        let random = Math.floor(Math.random() * colors.length);
        setColor(colors[random]);
    }
    return (
        <div className="changeColor">
            <p style={{ color }}> tekst </p>
            <button onClick={changeColor}>Zmień kolor</button>
        </div>
    )
}
export default ChangeColor