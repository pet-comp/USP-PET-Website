# PET Site 💚

O site oficial do PET Computação do ICMC-USP, tem como objetivo divulgar as atividades do grupo, atrair novos membros e expor materiais educacionais do grupo

## Dependências

Para rodar o projeto localmente, é necessário ter instalado:

- Node.js
- npm

## Instalação

Após clonar o repositório, instale as dependências com:

    npm ci

Neste projeto, recomendamos o uso de `npm ci` em vez de `npm install` para garantir que as dependências sejam instaladas exatamente nas versões definidas no `package-lock.json`, evitando diferenças de ambiente entre os membros da equipe.

Para iniciar o ambiente de desenvolvimento:

    npm run dev

O Vite irá disponibilizar a aplicação localmente, normalmente em:

    http://localhost:5173

# Introdução para trabalhar no PET Site

## Arquitetura

Atualmente, o projeto possui uma arquitetura simples e exclusivamente frontend.

Não há backend ou banco de dados. As informações exibidas pelo site são, por enquanto, estáticas e carregadas principalmente a partir de arquivos JSON.

O projeto utiliza:

- React
- Vite
- React Router
- JSON para armazenamento de dados estáticos

O site possui comportamento de **SPA (Single Page Application)**, ou Aplicação de Página Única.

Isso significa que apenas um documento inicial é carregado pelo navegador, enquanto o React atualiza dinamicamente o conteúdo exibido conforme o usuário navega pelo site, sem recarregar a página inteira.

## 1. Rotas

Atualmente, utilizamos o modelo declarativo do React Router.

As rotas são declaradas diretamente dentro da árvore de componentes do `App.jsx`, localizado em:

    src/App.jsx

Para a estrutura atual do projeto, que ainda possui poucas páginas e um roteamento simples, manter as rotas diretamente no `App.jsx` torna a organização fácil de visualizar e manter.