# Como rodar e buildar

Para criar um localhost que auto atualiza:

```
npx vite
```

Para buildar:

```
npx vite build
```

# Mensagem do template

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Arquitetura de Consumo de Dados (Data Fetching Architecture)

| **Objetivo** | **Limitações** |
|-------------|---------------|
| Centralizar o consumo de dados da API do Google Sheets para: | |
| - Minimizar requisições | - Não compartilha cache entre usuários |
| - Evitar chamadas duplicadas | - Depende da disponibilidade da API do Google |
| - Melhorar performance | - Não suporta cenários de alto tráfego (mas não é o caso) |
| - Simplificar o uso de dados nas páginas | |
