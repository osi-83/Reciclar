import { useState, useEffect } from 'react';
import { Rotas } from './routes/Routes';
import type { Usuario } from './types';
import { BrowserRouter } from 'react-router-dom';
import { inicializarUsuarios } from './utils/localStorage';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);

  useEffect(() => {
    inicializarUsuarios();
  }, []);

  return (
    <BrowserRouter>
      <Rotas usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado} />
    </BrowserRouter>
  );
}

export default App;