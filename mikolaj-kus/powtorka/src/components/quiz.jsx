import { useState } from "react";

function Quiz() {
    const pytanie = [
        {
            pytanie: "Jak ma na imię twórca tej strony?",
            odpowiedzi: ["Mikołaj", "Jan", "Piotr"],
            poprawna: "Mikołaj"
        }
    ];
    const [wynik, setWynik] = useState("");
    const [wynikColor, setWynikColor] = useState("black");

    return (
        <>
        <h2>Quiz</h2>
        <p>{pytanie[0].pytanie}</p>
            {pytanie[0].odpowiedzi.map((odp, index) => 
                <button key={index} onClick={() => {
                    if (odp === pytanie[0].poprawna) {
                        setWynik("Dobra odpowiedź ✅");
                        setWynikColor("green");
                    } else {
                        setWynik("Zła odpowiedź ❌");
                        setWynikColor("red");
                    }
                }}>{odp}</button>
            )}
        <p id="wynik" style={{ color: wynikColor }}>{wynik}</p>
        </>
    )
}

export default Quiz;