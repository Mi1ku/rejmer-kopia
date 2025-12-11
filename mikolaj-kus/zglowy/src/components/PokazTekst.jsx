import React, { useState } from "react";

export default function PokazTekst() {
    const [pokaz, setPokaz] = useState(false);
    return (
        <>
        <button onClick={() => setPokaz(!pokaz)}>Pokaż/Ukryj</button>
        {pokaz && <p>Teraz mnie widać!</p>}
        </>
    )
}