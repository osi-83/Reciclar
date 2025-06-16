import { jsx as _jsx } from "react/jsx-runtime";
import { LoginForm } from '../organisms/LoginForm';
import './LoginForm.css';
export const LoginPage = ({ onLoginSuccess }) => {
    return (_jsx("div", { className: "login-page", children: _jsx(LoginForm, { onSwitchToRegister: () => alert('Cadastro ainda não implementado'), onLoginSuccess: onLoginSuccess }) }));
};
