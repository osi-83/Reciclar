import type { LocalColeta } from '../../../types';
import './DashboardPage.css';

type Props = {
  locais: LocalColeta[];
  onEditar: (local: LocalColeta) => void;
  onDeletar: (id: string) => void;
};

export function ListaLocaisPage({ locais, onEditar, onDeletar }: Props) {
  return (
    <div>
      <h2>Locais de Coleta Cadastrados:</h2>

      {locais.length === 0 ? (
        <p>Nenhum local de coleta cadastrado ainda.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {locais.map((local) => (
            <li
              key={local.id}
              style={{
                marginBottom: '1.5rem',
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <p><strong>{local.nome}</strong></p>
              <p>{local.descricao}</p>
              <p>{local.endereco.bairro}, {local.endereco.localidade} - {local.endereco.uf}</p>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={() => onEditar(local)}
                  style={{ marginRight: '0.5rem', padding: '0.3rem 0.6rem' }}
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => onDeletar(local.id)}
                  style={{
                    backgroundColor: 'darkred',
                    color: 'white',
                    padding: '0.3rem 0.6rem',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  🗑️ Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}