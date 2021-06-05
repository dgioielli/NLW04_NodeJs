# NLW04_NodeJs

API de treinamento da trilha Node Js do NLW04 Fev 2021.

## Configuração do ambiente de desenvolvimento

1. Clonar o repositório
1. Executar o comando `yarn add` para instalar as dependências
1. Executar o comando `yarn dev` dentro da pasta **api** para rodar o servidor

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
    - Instalação do `TypeORM` que será utilizado por ter uma boa sinergia com o TypeScript.
        - Para isso usamos o comando **yarn add typeorm**
        - Também é necessário fazer a instalação do `reflect-metadata`
        - Por fim é necessário fazer a instalação do driver do **Banco de Dados** que será utilizado.
            - No caso será utilizado o `sqlite3`
    - Com o `TypeORM` instalado é o momento de criar o arquivo de configuração `ormconfig.json`
        - No configurador será indicado o tipo do banco de dados
        - A indicação do local do nosso banco de dados.
            - Como estamos usando o sqlite, foi criada uma pasta para fazer o armazenamento desse banco.
    - Foi criado um arquivo `index.ts` na pasta `database`. Esse arquiv será o responsável por fazer a conexão com o banco.
        - Com o arquivo responsável pela conexão criado, ele (junto com o reflect-metadata) precisam ser importados para utilização no arquivo `server.ts`
    - Criação do sistema de **migrations** para fazer o controle de versões do banco de dados.
        - Esse sistema ajuda a manter a organização dos bancos de dados utilizados no sistema.
        - Criação de um comando para rodar as **migrations**, o comando ficou `yarn typeorm`
        - Foi criada uma pasta para armazenar as **migrations**, e esse caminho foi configurado no arquivo de configurações `ormconfig.json`
    - Com o sistema das **migrations** todo configurado foi criada uma primeira **migration** para a criação da Tabela de `users`
        - O comando utilizado foi `yarn typeorm migration:create [NOME TABELA]`
        - Em seguida foi configuradas as funções `up` e `down` da **migration**
        - Para rodar a **migration** foi utilizado o comando `yarn typeorm migration:run`   
    - Implementação do método create do `UserController` e ele foi configurado no arquivo `routes.ts`
    - Criação da pasta `models` e do arquivo `User.ts`
        - Foi necessário fazer a configuração dos decorators. Para tanto devemos alterar as seguintes configurações no arquivo `tsconfig.json`
            - "experimentalDecorators": true
            - "emitDecoratorMetadata": true
            - "strictPropertyInitialization": false
        - Foi criada a classe `User`. E foi implementada a lógica de criação do Id usando **uuid**
        - Foi implementado utilizando um *repository* a função para a criação de uma entidade no banco de dados.
            - Foi implementada uma validação para usuários com e-mail repetido.
1. Aula 03 - Testando a aplicação:
1. Aula 04 - Envio de e-mail:
1. Aula 05 - Finalizando com validações:
