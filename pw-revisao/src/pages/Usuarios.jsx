import { useEffect, useState } from 'react';
import '../styles/Usuarios.css';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposta => resposta.json())
            .then(dados => {
                setUsuarios(dados);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Usuários</h2>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>{usuario.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Usuarios;