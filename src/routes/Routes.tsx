import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthPage } from '../components/pages/AuthPages';
import { DashboardPage } from '../components/pages/dashboard/DashboardPages';
import { CollectPointFormPage } from '../components/pages/cadastroLocalPages/CollectPointFormPage';
import type { Usuario } from '../types';

type Props = {
  usuarioLogado: Usuario | null;
  setUsuarioLogado: (usuario: Usuario) => void;
};

export function Rotas({ usuarioLogado, setUsuarioLogado }: Props) {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<AuthPage onLoginSuccess={setUsuarioLogado} />} />

      <Route path="/dashboard" element={
        usuarioLogado ? (
          <DashboardPage
            usuarioLogado={usuarioLogado}
            onIrParaCadastro={() => navigate('/cadastrar-local')}
            onLogout={() => {
              setUsuarioLogado(
                { id:'',
                  nome: '',
                  sexo: '',
                  cpf: '',
                  nascimento: '',
                  email: '',
                  senha: '',
                  endereco: ''
                  }
              );
              navigate('/');
            }}
          />
        ) : (
          <Navigate to="/" />
        )
      } />

      <Route path="/cadastrar-local" element={
        usuarioLogado ? (
          <CollectPointFormPage usuarioLogado={usuarioLogado} />
        ) : (
          <Navigate to="/" />
        )
      } />

      <Route path="/editar-local/:id" element={
        usuarioLogado ? (
          <CollectPointFormPage usuarioLogado={usuarioLogado} />
        ) : (
          <Navigate to="/" />
        )
      } />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  );
}