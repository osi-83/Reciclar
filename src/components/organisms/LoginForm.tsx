import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { autenticarUsuario } from '../../utils/localStorage';
import type { Usuario } from '../../types';
import './LoginForm.css';

type Props = {
  onSwitchToRegister: () => void;
  onLoginSuccess: (usuario: Usuario) => void;
};

export const LoginForm: React.FC<Props> = ({ onSwitchToRegister, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const usuario = autenticarUsuario(email, senha);
    if (!usuario) {
      setErro('E-mail ou senha inválidos');
    } else {
      setErro('');
      onLoginSuccess(usuario);
      navigate('/dashboard');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>

      <button
        type="button"
        className="secondary"
        onClick={onSwitchToRegister}
      >
        Cadastrar-se
      </button>
    </form>
  );
};