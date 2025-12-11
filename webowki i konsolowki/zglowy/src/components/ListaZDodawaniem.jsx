import React, {useState} from "react";

export default function ListaZDodawaniem() {
    const [item, setItem] = useState("");
    const [input, setInput] = useState([]);

    function dodajItem() {
        setInput([...input, item]);
        setItem("");
    }
        
    return (
        <>
        <h3>Moja lista:</h3>
        <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        />
        <br></br>
        <button onClick={dodajItem}>Dodaj</button>
        <ul>
            {input.map((el, index) => (
                <li key={index}>{el}</li>
            ))}
        </ul>
        </>
    )
}