import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectPointForm } from '../../organisms/CollectPointForm';
import type { LocalColeta, Usuario } from '../../../types';
import './CollectPointPage.css';

type Props = {
  usuarioLogado: Usuario;
};

export function CollectPointFormPage({ usuarioLogado }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [localEditavel, setLocalEditavel] = useState<LocalColeta | null>(null);

  useEffect(() => {
    if (id) {
      const dados = localStorage.getItem('locais');
      if (dados) {
        try {
          const todosLocais = JSON.parse(dados) as LocalColeta[];
          console.log('ID na url:', id);
          console.log('Usuário encontrado:', todosLocais);
          const encontrado = todosLocais.find(
            (l) => l.id === id && l.usuarioId === usuarioLogado.id
          );
          if (encontrado) {
            setLocalEditavel(encontrado);
          } else {
            alert('Local não encontrado ou pertence a outro usuário.');
            navigate('/dashboard');
          }
        } catch (e) {
          console.error('Erro ao carregar local do localStorage', e);
        }
      }
    }
  }, [id, usuarioLogado.id, navigate]);

  const salvarLocal = (novoLocal: LocalColeta) => {
    const dados = localStorage.getItem('locais');
    const todosLocais: LocalColeta[] = dados ? JSON.parse(dados) : [];

    let atualizados: LocalColeta[];

    if (id) {
      atualizados = todosLocais.map((l) => (l.id === id ? novoLocal : l));
    } else {
      atualizados = [...todosLocais, novoLocal];
    }

    localStorage.setItem('locais', JSON.stringify(atualizados));
    alert(id ? 'Local atualizado com sucesso!' : 'Local cadastrado com sucesso!');
    navigate('/dashboard');
  };

  return (
    <div className="collect-page-container">
      <button onClick={() => navigate('/dashboard')} style={{ marginBottom: '1rem', padding: '0.3rem 0.6rem' }}>
        Voltar para Dashboard
      </button>

      <h3>{id ? 'Editar Local de Coleta' : 'Cadastro de Local de Coleta'}</h3>

      <CollectPointForm
        usuarioId={usuarioLogado.id}
        onSalvar={salvarLocal}
        localEditavel={localEditavel ?? undefined}
      />
    </div>
  );
}