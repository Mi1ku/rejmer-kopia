import {useState, React} from 'react';

const addList = () => {
    const [lista, setLista] = useState([]);
    const [nowyElement, setNowyElement] = useState("");
    const dodajElement = () => {
        if (nowyElement.trim() !== "") {
            setLista([...lista, nowyElement]);
            setNowyElement("");
        }
    }
    return (
        <div className="addList">
            <h2>Dodaj element do listy</h2>
            <input 
                type="text"
                value={nowyElement}
                onChange={(e) => setNowyElement(e.target.value)}
            />
            <button onClick={dodajElement}>Dodaj</button>
            <ul>
                {lista.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </div>
    )
}
export default addList;