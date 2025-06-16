import { LoginForm } from '../organisms/LoginForm';
import type { Usuario } from '../../types';
import './LoginForm.css';

type Props = {
  onLoginSuccess: (usuario: Usuario) => void;
};

export const LoginPage = ({ onLoginSuccess }: Props) => {
  return (
    <div className="login-page">
      <LoginForm
        onSwitchToRegister={() => alert('Cadastro ainda não implementado')}
        onLoginSuccess={onLoginSuccess}
      />
    </div>
  );
};