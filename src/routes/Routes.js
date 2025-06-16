import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthPage } from '../components/pages/AuthPages';
import { DashboardPage } from '../components/pages/dashboard/DashboardPages';
import { CollectPointFormPage } from '../components/pages/cadastroLocalPages/CollectPointFormPage';
export function Rotas({ usuarioLogado, setUsuarioLogado }) {
    const navigate = useNavigate();
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AuthPage, { onLoginSuccess: setUsuarioLogado }) }), _jsx(Route, { path: "/dashboard", element: usuarioLogado ? (_jsx(DashboardPage, { usuarioLogado: usuarioLogado, onIrParaCadastro: () => navigate('/cadastrar-local'), onLogout: () => {
                        setUsuarioLogado({ id: '',
                            nome: '',
                            sexo: '',
                            cpf: '',
                            nascimento: '',
                            email: '',
                            senha: '',
                            endereco: ''
                        });
                        navigate('/');
                    } })) : (_jsx(Navigate, { to: "/" })) }), _jsx(Route, { path: "/cadastrar-local", element: usuarioLogado ? (_jsx(CollectPointFormPage, { usuarioLogado: usuarioLogado })) : (_jsx(Navigate, { to: "/" })) }), _jsx(Route, { path: "/editar-local/:id", element: usuarioLogado ? (_jsx(CollectPointFormPage, { usuarioLogado: usuarioLogado })) : (_jsx(Navigate, { to: "/" })) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }));
}
