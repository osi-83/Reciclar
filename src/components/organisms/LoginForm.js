import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { autenticarUsuario } from '../../utils/localStorage';
import './LoginForm.css';
export const LoginForm = ({ onSwitchToRegister, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const usuario = autenticarUsuario(email, senha);
        if (!usuario) {
            setErro('E-mail ou senha inválidos');
        }
        else {
            setErro('');
            onLoginSuccess(usuario);
            navigate('/dashboard');
        }
    };
    return (_jsxs("form", { className: "login-form", onSubmit: handleLogin, children: [_jsx("h2", { children: "Login" }), erro && _jsx("p", { style: { color: 'red' }, children: erro }), _jsx("input", { placeholder: "E-mail", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx("input", { placeholder: "Senha", type: "password", value: senha, onChange: (e) => setSenha(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Entrar" }), _jsx("button", { type: "button", className: "secondary", onClick: onSwitchToRegister, children: "Cadastrar-se" })] }));
};
