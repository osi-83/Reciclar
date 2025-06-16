import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Rotas } from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { inicializarUsuarios } from './utils/localStorage';
function App() {
    const [usuarioLogado, setUsuarioLogado] = useState(null);
    useEffect(() => {
        inicializarUsuarios();
    }, []);
    return (_jsx(BrowserRouter, { children: _jsx(Rotas, { usuarioLogado: usuarioLogado, setUsuarioLogado: setUsuarioLogado }) }));
}
export default App;
