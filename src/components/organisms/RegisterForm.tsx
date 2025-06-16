import { useState } from 'react';
import { salvarNovoUsuario } from '../../utils/localStorage';
import './RegisterForm.css';

type Props = {
  onBackToLogin: () => void;
};

export const RegisterForm: React.FC<Props> = ({ onBackToLogin }) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
      <select name="sexo" value={formData.sexo} onChange={handleChange} required>
        <option value="">Sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
      <input name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required />
      <input name="nascimento" type="date" value={formData.nascimento} onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
      <input name="senha" type="password" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
      <input name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />

      <button type="submit">Cadastrar</button>
      <button type="button" className="secondary" onClick={onBackToLogin}>
        Voltar ao login
      </button>
    </form>
  );
};