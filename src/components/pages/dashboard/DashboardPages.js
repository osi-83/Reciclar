import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
/*import dashboardImage from '../../../assets/dashboard-image.png';*/
export function DashboardPage({ usuarioLogado, onIrParaCadastro, onLogout }) {
    const [locais, setLocais] = useState([]);
    const [quantidadeUsuarios, setQuantidadeUsuarios] = useState(0);
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
    function handleEditarLocal(id) {
        navigate(`/editar-local/${id}`);
    }
    function handleExcluirLocal(id) {
        const confirmacao = window.confirm('Tem certeza que deseja excluir este local?');
        if (!confirmacao)
            return;
        const locaisAtualizados = locais.filter((local) => local.id !== id);
        setLocais(locaisAtualizados);
        localStorage.setItem('locais', JSON.stringify(locaisAtualizados));
    }
    return (_jsxs("div", { className: "dashboard", children: [_jsxs("h1", { children: ["Bem-vindo(a), ", usuarioLogado.nome, "!"] }), _jsx("img", { src:"/dashboard-image.png", alt: "Recicla365 - gerenciamento de res\u00EDduos", className: "dashboard-image" }), _jsxs("div", { className: "dashboard-cards", children: [_jsxs("div", { className: "dashboard-card", children: [_jsx("h3", { children: "Usu\u00E1rios Ativos" }), _jsx("p", { children: quantidadeUsuarios })] }), _jsxs("div", { className: "dashboard-card", children: [_jsx("h3", { children: "Locais de Coleta" }), _jsx("p", { children: locais.length })] })] }), _jsx("h2", { children: "Locais de Coleta Cadastrados:" }), locais.length === 0 ? (_jsx("p", { children: "Nenhum local de coleta cadastrado ainda." })) : (_jsx("ul", { children: locais.map((local) => (_jsxs("li", { style: { marginBottom: '1rem' }, children: [_jsx("strong", { children: local.nome }), " - ", local.descricao, " - ", local.bairro, ", ", local.cidade, _jsx("br", {}), _jsx("button", { onClick: () => handleEditarLocal(local.id), style: { marginRight: '0.5rem' }, children: "\u270F\uFE0F Editar" }), _jsx("button", { onClick: () => handleExcluirLocal(local.id), style: { backgroundColor: 'darkred', color: 'white' }, children: "\uD83D\uDDD1\uFE0F Excluir" })] }, local.id))) })), _jsxs("div", { className: "dashboard-buttons", children: [_jsx("button", { onClick: onIrParaCadastro, children: "Cadastrar Novo Local" }), _jsx("button", { onClick: onLogout, style: {
                            marginLeft: '1rem',
                            position: 'relative',
                            top: '1px',
                            backgroundColor: 'darkred',
                            color: 'white',
                            padding: '0.5rem 1rem',
                        }, children: "\uD83D\uDEAA Sair" })] })] }));
}
