
import Contador from './pages/Contador';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        
        <BrowserRouter>    
         <div className='container'>  
            <header>
                 <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/contador">Contador</Link> |{" "}
                    <Link to="/usuarios">Usuários</Link>
                </nav>
            </header>    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contador" element={<Contador />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Routes>
               
            </div>  
        </BrowserRouter>
    );
}

export default App;