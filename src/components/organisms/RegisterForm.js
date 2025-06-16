import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { salvarNovoUsuario } from '../../utils/localStorage';
import './RegisterForm.css';
export const RegisterForm = ({ onBackToLogin }) => {
    const [formData, setFormData] = useState({
        nome: '',
        sexo: '',
        cpf: '',
        nascimento: '',
        email: '',
        senha: '',
        endereco: ''
    });
    const [erro, setErro] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const novoUsuario = {
            ...formData,
            id: crypto.randomUUID()
        };
        const resultado = salvarNovoUsuario(novoUsuario);
        if (!resultado.sucesso) {
            setErro(resultado.erro || 'Erro ao cadastrar');
            return;
        }
        alert('Usuário cadastrado com sucesso!');
        onBackToLogin();
    };
    return (_jsxs("form", { className: "register-form", onSubmit: handleSubmit, children: [_jsx("h2", { children: "Cadastro" }), erro && _jsx("p", { style: { color: 'red' }, children: erro }), _jsx("input", { name: "nome", placeholder: "Nome", value: formData.nome, onChange: handleChange, required: true }), _jsxs("select", { name: "sexo", value: formData.sexo, onChange: handleChange, required: true, children: [_jsx("option", { value: "", children: "Sexo" }), _jsx("option", { value: "Masculino", children: "Masculino" }), _jsx("option", { value: "Feminino", children: "Feminino" })] }), _jsx("input", { name: "cpf", placeholder: "CPF", value: formData.cpf, onChange: handleChange, required: true }), _jsx("input", { name: "nascimento", type: "date", value: formData.nascimento, onChange: handleChange, required: true }), _jsx("input", { name: "email", type: "email", placeholder: "E-mail", value: formData.email, onChange: handleChange, required: true }), _jsx("input", { name: "senha", type: "password", placeholder: "Senha", value: formData.senha, onChange: handleChange, required: true }), _jsx("input", { name: "endereco", placeholder: "Endere\u00E7o", value: formData.endereco, onChange: handleChange, required: true }), _jsx("button", { type: "submit", children: "Cadastrar" }), _jsx("button", { type: "button", className: "secondary", onClick: onBackToLogin, children: "Voltar ao login" })] }));
};
