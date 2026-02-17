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
            case 'odejmij':
                wynik = parseFloat(numer1) - parseFloat(numer2);
                break;
            case 'pomnoz':
                wynik = parseFloat(numer1) * parseFloat(numer2);
                break;
            case 'podziel':
                if (numer2 !== 0) {
                    wynik = parseFloat(numer1) / parseFloat(numer2);
                } else {
                    wynik = 'Nie można dzielić przez zero';
                }
                break;
            default:
                break;
        }
        setWynik(wynik);
    }
    return (
        <div className="simpleCalculator">
            <h2>Prosty Kalkulator</h2>
            <input type="number" value={numer1} onChange={(e) => setNumer1(e.target.value)} />
            <input type="number" value={numer2} onChange={(e) => setNumer2(e.target.value)} />
            <div>
                <button onClick={() => oblicz('dodaj')}>Dodaj</button>
                <button onClick={() => oblicz('odejmij')}>Odejmij</button>
                <button onClick={() => oblicz('pomnoz')}>Pomnóż</button>
                <button onClick={() => oblicz('podziel')}>Podziel</button>
            </div>
            <h3>Wynik: {wynik}</h3>
        </div>
    )
}
export default SimpleCalculator;