import React from "react";
import { useState } from "react";

function ShowText() {
    const [pokaz, setPokaz] = useState(false);
    return (
        <>
        <button onClick={() => setPokaz(!pokaz)}>Pokaż/Ukryj</button>
        {pokaz && <p>Teraz mnie widać!</p>}
        </>
    )
}
export default ShowText;