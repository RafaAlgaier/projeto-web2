# projeto-web2 - BID

Autor: Rafael Algaier Teixeira

Design das Telas - Figma:
https://www.figma.com/design/GNrxKusfaxEBDmlC5sWoEA/Projeto-web2?node-id=1-3&p=f&t=iHo3N0QyjYst7FcF-0

### RA1 - Utilizar Frameworks CSS

- [x] **ID00** - Prototipa interfaces adaptáveis (ex: Figma).
- [x] **ID01** - Layout responsivo com Framework CSS (Bootstrap).
- [x] **ID02** - Responsividade com Flexbox ou Grid.
- [x] **ID03** - Uso de componentes do framework (botões, cards etc.).
- [x] **ID04** - Uso de unidades relativas (%, vh, rem...).
- [x] **ID05** - Animações com jQuery (hover em cards).
- [ ] ~~**ID06** - Transições personalizadas com CSS Transitions.~~
- [x] **ID07** - Design System consistente (cores, botões, layout).
- [ ] **ID08** - Uso de pré-processadores CSS como Sass.
- [x] **ID09** - Tipografia responsiva com `clamp()` ou media queries.
- [x] **ID10** - Responsividade de imagens (ex: `object-fit`).
- [ ] **ID11** - Otimização com WebP ou `<picture>`.

---

### RA2 - Tratamento de formulários e validações

- [x] **ID12** - Validação via HTML5 e mensagens customizadas.
- [x] **ID13** - Validação com REGEX (nome, número, idade).
- [x] **ID14** - Uso de select (posição), outros elementos de formulário.
- [x] **ID15** - Uso de Web Storage (localStorage para clube logado, clubes e jogadores).

---

### RA3 - Ferramentas e organização

- [x] **ID16** - Uso de Node.js e NPM no projeto.
- [ ] ~~**ID17** - Uso de linter (HTML ou JS - opcional com extensão).~~
- [x] **ID18** - Uso de Git/GitHub com commits organizados.
- [x] **ID19** - README estruturado conforme checklist.
- [ ] ~~**ID20** - Minificação de CSS/JS ou imagens otimizadas.~~
- [x] **ID21** - Estrutura de arquivos bem organizada (js/, css/, assets/).
- [ ] ~~**ID22** - Uso de metodologia BEM ou SMACSS.~~

---

### RA4 - Bibliotecas JavaScript

- [x] **ID23** - Uso da biblioteca jQuery (animações hover).
- [x] **ID24** - Integração com plugin jQuery Mask (campos idade e número).
- [ ] ~~**ID25** - Uso de Web Components (Lit, etc).~~
- [ ] ~~**ID26** - Uso de biblioteca de componentes como Material Web.~~

---

### RA5 - Requisições Assíncronas

- [x] **ID27** - Requisição assíncrona com `fetch` para cadastrar dados no JSON Server.
- [x] **ID28** - Requisição assíncrona com `fetch` para exibir dados dos jogadores.

## Manual de execução

* Clonar o repositório com git clone

*  Fazer checkout no branch develop que contém as modificações mais recentes

*  Abrir o projeto no editor Visual Studio Code (VS Code)

*  Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto

*  Instalar as dependências contidas no package.json com o comando: npm i

*   (Opcional) Instalar o JSON Server globalmente com o comando: npm i -g json-server

    Nota: A dependência já vem cadastrada no package.json para instalação local na pasta node_modules

*  Executar a API Fake (JSON Server) via um dos seguintes comandos:

    Execução via script registrado no package.json: npm run json:server:routes

    Ou via execução explícita: json-server --watch db.json --routes routes.json

*  O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto (onde estão os arquivos db.json e routes.json)

    por padrão, a aplicação JSON Server executa no endereço localhost:3000

*  Executar o projeto frontend

