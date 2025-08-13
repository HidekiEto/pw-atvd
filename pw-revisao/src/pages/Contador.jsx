import { useState } from 'react';
import '../styles/Contador.css';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className='contador-container'>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        </div>
    );
}

export default Contador;