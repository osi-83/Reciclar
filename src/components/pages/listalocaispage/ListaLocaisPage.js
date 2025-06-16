import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './DashboardPage.css';
export function ListaLocaisPage({ locais, onEditar, onDeletar }) {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Locais de Coleta Cadastrados:" }), locais.length === 0 ? (_jsx("p", { children: "Nenhum local de coleta cadastrado ainda." })) : (_jsx("ul", { style: { listStyle: 'none', padding: 0 }, children: locais.map((local) => (_jsxs("li", { style: {
                        marginBottom: '1.5rem',
                        border: '1px solid #ccc',
                        padding: '1rem',
                        borderRadius: '8px',
                    }, children: [_jsx("p", { children: _jsx("strong", { children: local.nome }) }), _jsx("p", { children: local.descricao }), _jsxs("p", { children: [local.bairro, ", ", local.localidade, " - ", local.uf] }), _jsxs("div", { style: { marginTop: '0.5rem' }, children: [_jsx("button", { onClick: () => onEditar(local), style: { marginRight: '0.5rem', padding: '0.3rem 0.6rem' }, children: "\u270F\uFE0F Editar" }), _jsx("button", { onClick: () => onDeletar(local.id), style: {
                                        backgroundColor: 'darkred',
                                        color: 'white',
                                        padding: '0.3rem 0.6rem',
                                        border: 'none',
                                        borderRadius: '4px',
                                    }, children: "\uD83D\uDDD1\uFE0F Excluir" })] })] }, local.id))) }))] }));
}
