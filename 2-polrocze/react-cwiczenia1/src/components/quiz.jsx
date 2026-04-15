import {useState, React} from 'react';

const Quiz = () => {
    const [poprawnaOdpowiedz, setPoprawnaOdpowiedz] = useState();
    switch (poprawnaOdpowiedz) {
        case "Zachodniopomorskie":
            setPoprawnaOdpowiedz(true);
            break;
        case "Pomorskie":
            setPoprawnaOdpowiedz(false);
            break;
        default:
            break;
    }
    return (
        <>
            <h2>w jakim województwie leży miasto Darłowo?</h2>
            <button onClick={() => setPoprawnaOdpowiedz("Zachodniopomorskie")}>Zachodniopomorskie</button>
            <button onClick={() => setPoprawnaOdpowiedz("Pomorskie")}>Pomorskie</button>
            {poprawnaOdpowiedz ? 
            <p style={{color: "green"}}>Poprawna odpowiedź!</p>
            :
            <p style={{color: "red"}}>Niepoprawna odpowiedź!</p>
            }
        </>
    )
}
export default Quiz