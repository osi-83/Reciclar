import { useState } from 'react';
import { AuthTemplate } from '../../components/templates/AuthTemplate';
import { LoginForm } from '../../components/organisms/LoginForm';
import { RegisterForm } from '../../components/organisms/RegisterForm';
import type { Usuario } from '../../types';

export const AuthPage = ({ onLoginSuccess }: { onLoginSuccess: (usuario: Usuario) => void }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <AuthTemplate>
      {isRegistering ? (
        <RegisterForm onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        <LoginForm
          onSwitchToRegister={() => setIsRegistering(true)}
          onLoginSuccess={onLoginSuccess}
        />
      )}
    </AuthTemplate>
  );
};