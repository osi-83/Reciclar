export type Usuario = {
  id: string;
  nome: string;
  sexo: string;
  cpf: string;
  nascimento: string;
  email: string;
  senha: string;
  endereco: string;
};

export type TipoResiduo =
  | 'Vidro'
  | 'Metal'
  | 'Papel'
  | 'Plástico'
  | 'Orgânico'
  | 'Baterias';

export type EnderecoViaCEP = {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type LocalColeta = {
  id: string;
  usuarioId: string;
  nome: string;
  descricao: string;
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  localidade: string;
  uf: string;
  residuos: string[];
};