import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { AuthTemplate } from '../../components/templates/AuthTemplate';
import { LoginForm } from '../../components/organisms/LoginForm';
import { RegisterForm } from '../../components/organisms/RegisterForm';
export const AuthPage = ({ onLoginSuccess }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    return (_jsx(AuthTemplate, { children: isRegistering ? (_jsx(RegisterForm, { onBackToLogin: () => setIsRegistering(false) })) : (_jsx(LoginForm, { onSwitchToRegister: () => setIsRegistering(true), onLoginSuccess: onLoginSuccess })) }));
};
