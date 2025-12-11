import React, { useState } from "react";

export default function LicznikKlikniec() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Licznik kliknięć</h2>
            <button onClick={handleClick}>Kliknij mnie</button>
            <h2>Licznik: {count}</h2>
        </>
    );
}