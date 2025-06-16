import { useEffect, useState, useCallback } from 'react';
import { CollectPointForm } from '../../organisms/CollectPointForm';
import { ListaLocaisPage } from '../listalocaispage/ListaLocaisPage';
import type { LocalColeta, Usuario } from '../../../types/index';

type Props = {
    usuario: Usuario;
    onVoltar: () => void;
};

export function LocaisPage({ usuario, onVoltar }: Props) {
    const [locais, setLocais] = useState<LocalColeta[]>([]);
    const [editando, setEditando] = useState<LocalColeta | undefined>(undefined);
    const [modoFormulario, setModoFormulario] = useState(false);

    const carregarLocais = useCallback(() => {
        const dados = localStorage.getItem('locais');
        if (!dados) {
            setLocais([]);
            return;
        }

        try {
            const todosLocais = JSON.parse(dados) as LocalColeta[];
            const locaisDoUsuario = todosLocais.filter(l => l.usuarioId === usuario.id);
            setLocais(locaisDoUsuario);
        } catch (e) {
            console.error('Erro ao ler locais do localStorage', e);
            setLocais([]);
        }
    }, [usuario.id]);

    useEffect(() => {
        carregarLocais();
    }, [carregarLocais]);

    const salvarLocal = (novoLocal: LocalColeta) => {
        const dados = localStorage.getItem('locais');
        const todosLocais: LocalColeta[] = dados ? JSON.parse(dados) : [];

        let atualizados;
        if (editando) {
            atualizados = todosLocais.map(l => l.id === novoLocal.id ? novoLocal : l);
        } else {
            atualizados = [...todosLocais, novoLocal];
        }

        localStorage.setItem('locais', JSON.stringify(atualizados));
        carregarLocais();
        setEditando(undefined);
        setModoFormulario(false);
    };

    const editarLocal = (local: LocalColeta) => {
        setEditando(local);
        setModoFormulario(true);
    };

    const cancelarEdicao = () => {
        setEditando(undefined);
        setModoFormulario(false);
    };

    const handleDeletar = (id: string) => {
        const confirmacao = window.confirm('Tem certeza que deseja excluir este local?');
        if (!confirmacao) return;

        const dados = localStorage.getItem('locais');
        if (!dados) return;

        try {
            const todosLocais = JSON.parse(dados) as LocalColeta[];
            const atualizados = todosLocais.filter(l => l.id !== id);
            localStorage.setItem('locais', JSON.stringify(atualizados));
            carregarLocais();
        } catch (e) {
            console.error('Erro ao excluir local', e);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={onVoltar} style={{ marginBottom: '1rem' }}>
                Voltar ao login
            </button>


            {modoFormulario ? (
                <>
                    <button onClick={cancelarEdicao} style={{ marginBottom: '1rem' }}>
                        Voltar para lista
                    </button>
                    <CollectPointForm
                        usuarioId={usuario.id}
                        onSalvar={salvarLocal}
                        localEditavel={editando}
                    />
                </>
            ) : (
                <>
                    <button
                        onClick={() => {
                            setEditando(undefined);
                            setModoFormulario(true);
                        }}
                        style={{ marginBottom: '1rem' }}
                    >
                        Cadastrar novo local
                    </button>
                    <ListaLocaisPage
                        onEditar={editarLocal}
                        locais={locais}
                        onDeletar={handleDeletar}
                    />
                </>
            )}
        </div>
    );
}