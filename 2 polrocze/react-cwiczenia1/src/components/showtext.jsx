import {useState, React} from 'react';
const showtext = () => {
    const [tekstWidoczny, setTekstWidoczny] = useState(false)

    const przelacz = () => {
        setTekstWidoczny(!tekstWidoczny)
    }
    return (
        <div className="showText">
            <button onClick={przelacz}>Pokaż/Ukryj tekst!</button>
            {tekstWidoczny && <h2>Lubie Reacta!</h2>}
        </div>
    )
}
export default showtext