import React from "react";
import { useState } from "react";

export default function ListaDodaj() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const addItem = () => {
        if (input.trim() !== "") {
            setItems([...items, input]);
            setInput("");
        }
    };
    return (
        <>
        <h2>Lista z dodawaniem</h2>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Dodaj nowy element"
        />
        <button onClick={addItem}>Dodaj</button>
        <ul id="listaDodaj">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    );
}