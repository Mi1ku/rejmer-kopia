import { useState } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState("yellow");
    const changecolor = () => {
        const colors = ["yellow", "red", "blue", "green", "purple"];
        const random = Math.floor(Math.random() * colors.length);
        setColor(colors[random]);
    }
    return (
        <>
            <button onClick={changecolor}>Zmień kolor</button>
            <p style={{color}}>Furioza nigdy swoich nie zostawia!</p>
        </>
    )
}
export default ChangeColor