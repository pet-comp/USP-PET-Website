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

## Próximos Passos

Nesta seção estão reunidas as principais evoluções planejadas para o PET Site.

### 1. Área Administrativa

O escopo inicial da Área Administrativa já foi definido. Ela será responsável por centralizar as principais informações que hoje dependem de alterações manuais no código ou em arquivos estáticos.

Funcionalidades previstas:

- **Controle das fontes de dados**
  - Gerenciar os links das planilhas utilizadas pelo site.
  - Inicialmente, serão utilizadas principalmente:
    - Planilha de alocação;
    - Planilha geral de membros.

- **Gerenciamento de projetos**
  - Criar novos projetos;
  - Editar projetos existentes;
  - Publicar ou remover projetos da página;
  - Adicionar informações como descrição, membros envolvidos, links, relatórios e demais materiais relacionados.

- **Gerenciamento das atividades do PET**
  - Adicionar atividades atuais do grupo;
  - Definir períodos de inscrição;
  - Atualizar informações relacionadas às atividades sem necessidade de alterar o código.

- **Logs e monitoramento**
  - Visualizar quais usuários realizaram alterações recentes;
  - Registrar ações realizadas dentro da área administrativa;
  - Exibir alertas relacionados a possíveis erros ou bugs do site.

- **Controle de informações institucionais**
  - Permitir a atualização de informações institucionais do PET diretamente pela área administrativa.

---

### 2. Informações que podem se tornar dinâmicas

Foi realizado um levantamento inicial das informações atualmente estáticas que podem ser automatizadas utilizando as planilhas do PET.

#### Conheça nossas frentes

As frentes exibidas no site poderão ser obtidas diretamente da **planilha de alocação**.

As descrições das frentes poderão continuar armazenadas de forma padrão no site, mas deverão ser revisadas no início de cada semestre.

Informações que podem ser automatizadas:

- Nome das frentes;
- Membros alocados em cada frente;
- Atualização automática da composição das frentes a cada nova alocação.

#### Sobre nós > Membros

A página de membros poderá utilizar duas fontes principais:

- **Planilha de alocação**
  - Responsável por informar em quais frentes cada membro participa.

- **Planilha geral de membros**
  - Nome;
  - Data de entrada no PET;
  - Links pessoais ou profissionais;
  - Demais informações individuais.

Também será necessário adicionar as **fotos dos membros** à estrutura utilizada pela planilha geral, para que essas informações possam ser utilizadas automaticamente pelo site.

---

### Próximas definições

Ainda será necessário definir:

- Como será realizada a integração entre o site e as planilhas;
- Quais dados serão armazenados em banco de dados futuramente;
- Estrutura de autenticação da Área Administrativa;
- Níveis de permissão dos usuários;
- Estrutura de logs;
- Como serão tratados erros de sincronização com as planilhas;
- Quais informações institucionais poderão ser editadas pelo painel.