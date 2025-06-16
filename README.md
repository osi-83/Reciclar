# Reciclar

Criada a plataforma com a premissa, de auxilio no gerenciamento da destinação dos
residuos recicláveis e trazer ao conhecimento dos usuários do sistema, os locais (pontos) de coleta desses materiais.<br>
Buscando promover a sustentabilidade, conectando cidadãos a locais de descarte adequado, incentivando a conscientização ambiental.

# Objetivo

Este repositório contém o MVP ( Minimum Viable Product) do Front-End da aplicação Recicla, desenvolvido com React + TypeScript.<br>
O projeto permite que usuários:
<li> Realizem  login e cadastro de forma segura </li>
<li> Cadastrem e editem seus locais de coleta </li>
<li> Visualizem todos os locais registrados em um painel (Dashboard) </li>
<li> Consultem informações como endereço, tipos de resíduos aceitos e responsável pelo ponto </li>
<li> Utilizem a API ViaCep para autocompletar endereços </li>
<li> Persistam dados localmente viia LocalStorage </li><br>

# Tecnologias Utilizadas
 
<li> React </li>
<li> TypeScript </li>
<li> React Router DOM </li>
<li> Vite (build e dev server) </li>
<li> CSS Modules </li>
<li> API ViaCep ( http://viacep.com.br) </li><br>

# Funcionalidades implementadas
<li> Cadastro de usuários (com validação do Cpf único) </li>
<li> Login de usuários </li>
<li> Listagem de pontos de coleta por usuário </li>
<li> Cadastro e edição de local com endereço via Cep </li>
<li> Verificação de permissão para edição (somente o dono pode editar) </li>
<li> Validações de campos essenciais </li>
<li> Navegação protegida com autenticação simulada </li><br>

# Próximas melhorias (FUTURO)
<li> Integração com backend real </li>
<li> Autenticação com JWT </li>
<li> Mapa interativo com localização do pontos </li>
<li> Filtros por tipo de residuo </li>
<li> Ranking de usuários mais ativos </li><br>

# Contribuição

<li> Sinta-se a vontade para abrir issues e pull request! Toda contribuição é bem vinda.</li><br>

# Licença

<li> Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes. </li>
<br>
<br>
<br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
