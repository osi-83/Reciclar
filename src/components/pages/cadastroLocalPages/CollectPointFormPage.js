import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectPointForm } from '../../organisms/CollectPointForm';
import './CollectPointPage.css';
export function CollectPointFormPage({ usuarioLogado }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [localEditavel, setLocalEditavel] = useState(null);
    useEffect(() => {
        if (id) {
            const dados = localStorage.getItem('locais');
            if (dados) {
                try {
                    const todosLocais = JSON.parse(dados);
                    console.log('ID na url:', id);
                    console.log('Usuário encontrado:', todosLocais);
                    const encontrado = todosLocais.find((l) => l.id === id && l.usuarioId === usuarioLogado.id);
                    if (encontrado) {
                        setLocalEditavel(encontrado);
                    }
                    else {
                        alert('Local não encontrado ou pertence a outro usuário.');
                        navigate('/dashboard');
                    }
                }
                catch (e) {
                    console.error('Erro ao carregar local do localStorage', e);
                }
            }
        }
    }, [id, usuarioLogado.id, navigate]);
    const salvarLocal = (novoLocal) => {
        const dados = localStorage.getItem('locais');
        const todosLocais = dados ? JSON.parse(dados) : [];
        let atualizados;
        if (id) {
            atualizados = todosLocais.map((l) => (l.id === id ? novoLocal : l));
        }
        else {
            atualizados = [...todosLocais, novoLocal];
        }
        localStorage.setItem('locais', JSON.stringify(atualizados));
        alert(id ? 'Local atualizado com sucesso!' : 'Local cadastrado com sucesso!');
        navigate('/dashboard');
    };
    return (_jsxs("div", { className: "collect-page-container", children: [_jsx("button", { onClick: () => navigate('/dashboard'), style: { marginBottom: '1rem', padding: '0.3rem 0.6rem' }, children: "Voltar para Dashboard" }), _jsx("h3", { children: id ? 'Editar Local de Coleta' : 'Cadastro de Local de Coleta' }), _jsx(CollectPointForm, { usuarioId: usuarioLogado.id, onSalvar: salvarLocal, localEditavel: localEditavel ?? undefined })] }));
}
