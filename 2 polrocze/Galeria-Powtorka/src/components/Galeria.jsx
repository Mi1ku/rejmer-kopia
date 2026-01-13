import 'bootstrap/dist/css/bootstrap.min.css';
import dane from '../objects/Dane.jsx';

const Galeria = () => {
    return (
        <>
        <h1>Galeria</h1>
        {dane.map((obraz) => (
            <div key={obraz.id}>
                <img
                    src={`/assets/${obraz.filename}`}
                    alt={obraz.alt}
                    width="300"
                    height="200"
                />
            </div>
        ))}
        </>
    )
}

export default Galeria;