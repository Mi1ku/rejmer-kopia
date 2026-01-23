import { useState } from 'react';

const Clicker = () => {
    const [klikniecia, setKlikniecia] = useState(0)

    return (
        <div className="clicker">
            <button onClick={() => setKlikniecia(klikniecia + 1)}>
                Kliknięto {klikniecia} razy
            </button>
        </div>
    )
}
export default Clicker