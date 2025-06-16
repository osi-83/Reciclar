import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { CollectPointForm } from '../../organisms/CollectPointForm';
import { ListaLocaisPage } from '../listalocaispage/ListaLocaisPage';
export function LocaisPage({ usuario, onVoltar }) {
    const [locais, setLocais] = useState([]);
    const [editando, setEditando] = useState(undefined);
    const [modoFormulario, setModoFormulario] = useState(false);
    const carregarLocais = useCallback(() => {
        const dados = localStorage.getItem('locais');
        if (!dados) {
            setLocais([]);
            return;
        }
        try {
            const todosLocais = JSON.parse(dados);
            const locaisDoUsuario = todosLocais.filter(l => l.usuarioId === usuario.id);
            setLocais(locaisDoUsuario);
        }
        catch (e) {
            console.error('Erro ao ler locais do localStorage', e);
            setLocais([]);
        }
    }, [usuario.id]);
    useEffect(() => {
        carregarLocais();
    }, [carregarLocais]);
    const salvarLocal = (novoLocal) => {
        const dados = localStorage.getItem('locais');
        const todosLocais = dados ? JSON.parse(dados) : [];
        let atualizados;
        if (editando) {
            atualizados = todosLocais.map(l => l.id === novoLocal.id ? novoLocal : l);
        }
        else {
            atualizados = [...todosLocais, novoLocal];
        }
        localStorage.setItem('locais', JSON.stringify(atualizados));
        carregarLocais();
        setEditando(undefined);
        setModoFormulario(false);
    };
    const editarLocal = (local) => {
        setEditando(local);
        setModoFormulario(true);
    };
    const cancelarEdicao = () => {
        setEditando(undefined);
        setModoFormulario(false);
    };
    const handleDeletar = (id) => {
        const confirmacao = window.confirm('Tem certeza que deseja excluir este local?');
        if (!confirmacao)
            return;
        const dados = localStorage.getItem('locais');
        if (!dados)
            return;
        try {
            const todosLocais = JSON.parse(dados);
            const atualizados = todosLocais.filter(l => l.id !== id);
            localStorage.setItem('locais', JSON.stringify(atualizados));
            carregarLocais();
        }
        catch (e) {
            console.error('Erro ao excluir local', e);
        }
    };
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("button", { onClick: onVoltar, style: { marginBottom: '1rem' }, children: "Voltar ao login" }), modoFormulario ? (_jsxs(_Fragment, { children: [_jsx("button", { onClick: cancelarEdicao, style: { marginBottom: '1rem' }, children: "Voltar para lista" }), _jsx(CollectPointForm, { usuarioId: usuario.id, onSalvar: salvarLocal, localEditavel: editando })] })) : (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => {
                            setEditando(undefined);
                            setModoFormulario(true);
                        }, style: { marginBottom: '1rem' }, children: "Cadastrar novo local" }), _jsx(ListaLocaisPage, { onEditar: editarLocal, locais: locais, onDeletar: handleDeletar })] }))] }));
}
