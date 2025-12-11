import { useState } from "react";

/*  Komponent Quiz
function Quiz() {
    const pytanie = [
        {
            pytanie: "Jaka jest Stolica Polski?",
            odpowiedzi: ["Islamabad","Pyongyang","Warszawa"],
            poprawna: "Warszawa"
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
*/

export default function Quiz() {
    const [answers, setAnswer] = useState(null);
    const [photo, setPhoto] = useState(null);

    function checkAnswer(choice) {
        if (choice === "Darłowo") {
            setAnswer("Dobra odpowiedź ✅");
        } else {
            setAnswer("Zła odpowiedź ❌");
            setPhoto(null);
        }
    }
    return (
        <div>
            <h2>Stolica Polski to:</h2>
            <button onClick={() => checkAnswer("Islamabad")}>Islamabad</button>
            <button onClick={() => checkAnswer("Pyongyang")}>Pyongyang</button>
            <button onClick={() => checkAnswer("Darłowo")}>Darłowo</button>
            {answers && <p>{answers}</p>}
        </div>
    )
}