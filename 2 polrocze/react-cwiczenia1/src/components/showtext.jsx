import {useState, React} from 'react';
const showtext = () => {
    const [tekstWidoczny, setTekstWidoczny] = useState(false)
    return (
        <div className="showText">
            <button onClick={() => setTekstWidoczny(!tekstWidoczny)}>Pokaż/Ukryj tekst</button>
            {tekstWidoczny && <p>Furioza nigdy swoich nie zostawia!</p>}
        </div>
    )
}
export default showtext