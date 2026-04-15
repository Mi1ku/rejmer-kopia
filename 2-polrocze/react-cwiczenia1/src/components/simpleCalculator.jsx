import {useState, React} from 'react';
const SimpleCalculator = () => {
    const [numer1, setNumer1] = useState(0);
    const [numer2, setNumer2] = useState(0);
    const [wynik, setWynik] = useState(0);

    const oblicz = (dzialanie) => {
        let wynik = 0;
        switch(dzialanie) {
            case 'dodaj':
                wynik = parseFloat(numer1) + parseFloat(numer2);
                break;
            default:
                break;
        }
        setWynik(wynik);
    }
    return (
        <div className="simpleCalculator">
            <h2>Prosty kalkulator</h2>
            <input 
                type="number"
                value={numer1}
                onChange={(e) => setNumer1(e.target.value)}
            />
            <input
                type="number"
                value={numer2}
                onChange={(e) => setNumer2(e.target.value)}
            />
            <div className="buttons">
                <button onClick={() => oblicz('dodaj')}>Dodaj</button>
            </div>
            <p className="result">Wynik: {wynik}</p>
        </div>

    )
}
export default SimpleCalculator;