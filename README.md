# projeto-web2

Autor: Rafael Algaier Teixeira

Design das Telas - Figma:
https://www.figma.com/design/GNrxKusfaxEBDmlC5sWoEA/Projeto-web2?node-id=1-3&p=f&t=iHo3N0QyjYst7FcF-0

# Checklist de Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

## RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [ ] **ID0** - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design como Figma, Quant UX ou Sketch.
- [ ] **ID01** - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap, Materialize ou Tailwind (com DaisyUI), aproveitando as técnicas de Flexbox ou Grid oferecidas pelo próprio framework.
- [ ] **ID02** - Utiliza técnica de responsividade nativa de CSS, como Flexbox ou Grid Layout, para criar layouts responsivos e fluidos em diferentes resoluções de tela.
- [ ] **ID03** - Utiliza componentes CSS (ex. card, button ou outros) e JavaScript (ex. modal, carrousel ou outro) oferecidos por um Framework CSS.
- [ ] **ID04** - Implementa um layout fluido e responsivo utilizando unidades relativas (vw, vh, %, em ou rem) em vez de unidades fixas (px).
- [ ] **ID05** - Implementa animações em elementos da página, como fadeIn/fadeOut, slideIn/slideOut, utilizando CSS Animations ou bibliotecas de animação, como o Animate.css ou JQuery.
- [ ] **ID06** - Cria transições personalizadas entre diferentes estados da página ou elementos, como mudanças de layout, alterações de cor ou exibição/hide de elementos.
- [ ] **ID07** - Aplica um Design System consistente, definindo diretrizes de estilo, cores, tipografia e padrões de componentes.
- [ ] **ID08** - Implementa pré-processadores CSS, como o Sass, em conjunto com um Framework CSS ou de forma isolada.
- [ ] **ID09** - Aplica tipografia responsiva utilizando media queries ou a função clamp(), em conjunto com unidades relativas.

## RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.

- [ ] **ID10** - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro ou sucesso.
- [ ] **ID11** - Aplica expressões regulares (REGEX) para validações customizadas nos campos de formulários.
- [ ] **ID12** - Incorpora elementos de listagem, como checkbox, radio ou select, em formulários web.
- [ ] **ID13** - Realiza a escrita e leitura de dados no Web Storage.

## RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.

- [ ] **ID14** - Configura adequadamente um ambiente de desenvolvimento usando Node.js e NPM.
- [ ] **ID15** - Utiliza linters, como ESLint ou Stylelint, para garantir a qualidade e consistência do código.
- [ ] **ID16** - Adota boas práticas de versionamento utilizando Git e GitHub.
- [ ] **ID17** - Utiliza técnicas de minificação e otimização de recursos.
- [ ] **ID18** - Organiza o arquivo README.md conforme o template exigido na disciplina.
- [ ] **ID19** - Organiza os arquivos do projeto de forma coerente.
- [ ] **ID20** - Utiliza as metodologias BEM ou SMACSS para organizar os estilos CSS.

## RA4 - Aplicar bibliotecas de funções e componentes em JavaScript.

- [ ] **ID21** - Utiliza a biblioteca jQuery para manipular o DOM.
- [ ] **ID22** - Seleciona e integra com sucesso um plugin jQuery relevante para o projeto.
- [ ] **ID23** - Utiliza bibliotecas de web components, como Lit, para criar componentes reutilizáveis.
- [ ] **ID24** - Utiliza uma biblioteca de componentes prontos, como Material Web Components ou outra de escolha.

## RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas.

- [ ] **ID25** - Realiza requisições assíncronas para uma API fake utilizando AJAX ou Fetch API.
- [ ] **ID26** - Realiza requisições assíncronas para uma API fake utilizando AJAX ou Fetch API para exibição dos dados.

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

*  Por padrão, a aplicação JSON Server executa no endereço localhost:3000

*  Executar o projeto frontend

