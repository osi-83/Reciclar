import { usuariosDefault } from '../data/usuariosDefault';
import type { Usuario } from '../types/index';

const LOCAL_KEY = 'usuarios';

export const inicializarUsuarios = () => {
  const jaExiste = localStorage.getItem(LOCAL_KEY);
  if (!jaExiste) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(usuariosDefault));
  }
};

export const obterUsuarios = (): Usuario[] => {
  const data = localStorage.getItem(LOCAL_KEY);
  return data ? JSON.parse(data) : [];
};

export const salvarNovoUsuario = (novoUsuario: Usuario): { sucesso: boolean; erro?: string } => {
  const usuarios = obterUsuarios();

  const emailExiste = usuarios.some((u) => u.email === novoUsuario.email);
  const cpfExiste = usuarios.some((u) => u.cpf === novoUsuario.cpf);

  if (emailExiste) return { sucesso: false, erro: 'E-mail já cadastrado' };
  if (cpfExiste) return { sucesso: false, erro: 'CPF já cadastrado' };

  usuarios.push(novoUsuario);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(usuarios));
  return { sucesso: true };
};

export const autenticarUsuario = (email: string, senha: string): Usuario | undefined => {
  const usuarios = obterUsuarios();
  return usuarios.find(u => u.email === email && u.senha === senha);
};