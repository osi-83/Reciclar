import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Usuario, LocalColeta } from '../../../types';
import './DashboardPage.css';

type Props = {
  usuarioLogado: Usuario;
  onIrParaCadastro: () => void;
  onLogout: () => void;
};
export function DashboardPage({ usuarioLogado, onIrParaCadastro, onLogout }: Props) {
  const [locais, setLocais] = useState<LocalColeta[]>([]);
  const [quantidadeUsuarios, setQuantidadeUsuarios] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const dadosLocais = localStorage.getItem('locais');
    if (dadosLocais) {
      setLocais(JSON.parse(dadosLocais));
    }

    const dadosUsuarios = localStorage.getItem('usuarios');
    if (dadosUsuarios) {
      const usuarios = JSON.parse(dadosUsuarios);
      setQuantidadeUsuarios(usuarios.length);
    }
  }, []);

  function handleEditarLocal(id: string) {
    navigate(`/editar-local/${id}`);
  }

  function handleExcluirLocal(id: string) {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este local?');
    if (!confirmacao) return;

    const locaisAtualizados = locais.filter((local) => local.id !== id);
    setLocais(locaisAtualizados);
    localStorage.setItem('locais', JSON.stringify(locaisAtualizados));
  }

  return (
    <div className="dashboard">
      <h1>Bem-vindo(a), {usuarioLogado.nome}!</h1>

      return (
      <div className="dashboard">
        <h1>Bem-vindo(a), {usuarioLogado.nome}!</h1>

        <img
          src="/dashboard-image.png"
          alt="Recicla365 - gerenciamento de resíduos"

        />

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Usuários Ativos</h3>
            <p>{quantidadeUsuarios}</p>
          </div>
          <div className="dashboard-card">
            <h3>Locais de Coleta</h3>
            <p>{locais.length}</p>
          </div>
        </div>

        <h2>Locais de Coleta Cadastrados:</h2>

        {locais.length === 0 ? (
          <p>Nenhum local de coleta cadastrado ainda.</p>
        ) : (
          <ul>
            {locais.map((local) => (
              <li key={local.id} style={{ marginBottom: '1rem' }}>
                <strong>{local.nome}</strong> - {local.descricao} - {local.bairro}, {local.cidade}
                <br />
                <button onClick={() => handleEditarLocal(local.id)} style={{ marginRight: '0.5rem' }}>
                  ✏️ Editar
                </button>
                <button onClick={() => handleExcluirLocal(local.id)} style={{ backgroundColor: 'darkred', color: 'white' }}>
                  🗑️ Excluir
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="dashboard-buttons">
          <button onClick={onIrParaCadastro}>Cadastrar Novo Local</button>
          <button
            onClick={onLogout}
            style={{
              marginLeft: '1rem',
              position: 'relative',
              top: '1px',
              backgroundColor: 'darkred',
              color: 'white',
              padding: '0.5rem 1rem',
            }}
          >
            🚪 Sair
          </button>
        </div>
      </div>
    );
  </div>
  
);

}