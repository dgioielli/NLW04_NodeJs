# NLW04_NodeJs

API de treinamento da trilha Node Js do NLW04 Fev 2021.

## Configuração do ambiente de desenvolvimento

1. Clonar o repositório
1. Executar o comando `npm i` para instalar as dependências
1. Fazer uma cópia do arquivo `.env.exemple` e chamar de `.env`
1. Atualizar as variáveis de ambiente que estão no arquivo `.env`
1. Executar o comando `npm start` para rodar o servidor

## Passos do processo de estudo:
Aqui eu vou tentar montar um resumo de tudo que foi utilizado e feito durante o processo de desenvolvimento da API.

### Testes para compreender as vantagens e o funcionamento do TypeScript


1. Usando o arquivo `Teste.ts` foram realizadas algumas demonstrações de como funciona utilizar `TypeScript` no lugar de `JaveScript`.

    1. Foi apresentada a diferença de indicação usando ou não a definição de tipos.
    1. Foi apresentada uma forma de fazer o desempacotamento de dados de uma estrutura.

### Modulos instalados

A seguir temos uma lista dos modulos que foram instalados separados pelas aulas do desenvolvimento:

1. Aula 01 - Introdução:
    - Dependências:
        - `express`
    - Dependências de desenvolvimento:
        - `typescript`
        - `ts-node-dev`
        - `@type/express`
1. Aula 02 - Banco de Dados:
    - Dependências:
    - Dependências de desenvolcimento:
1. Aula 03 - Testando a aplicação:
    - Dependências:
    - Dependências de desenvolcimento:
1. Aula 04 - Envio de e-mail:
    - Dependências:
    - Dependências de desenvolcimento:
1. Aula 05 - Finalizando com validações:
    - Dependências:
    - Dependências de desenvolcimento:

### Sequência de desenvolvimento:

1. Aula 01 - Introdução:
    - Dentro da pasta da `api` foi criado a aplicação com o comando **yarn init -y**.
    - As dependências foram instaladas.
    - O arquivo `server.ts` foi criado para servir como sendo a base do servidor da aplicação.
        - No arquivo `server.ts` foi implementada a criação e inicialização do server **express**.
    - O arquivo `routes.ts` foi criado para servir como configurador das rotas do sistema.
    - A pasta `controllers` foi criada para armazenar os controllers que serão desenvolvidos na aplicação.
    - O arquivo `UserController.ts` foi criado para servir como o controller responsável pelas requisições de Usuários.
        - A rota **POST** de `UserController` foi configurada no arquivo `router.ts`
1. Aula 02 - Banco de Dados:
1. Aula 03 - Testando a aplicação:
1. Aula 04 - Envio de e-mail:
1. Aula 05 - Finalizando com validações:
