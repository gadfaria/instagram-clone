# Instagram Clone

Projeto feito para processo seletivo.

## Back-end

Para o desenvolvimento do back-end foi utilizado o [express-sequelize-boilerplate](https://github.com/gadfaria/express-sequelize-boilerplate) (feito por mim). 

Boilerplate criado com [Express](https://expressjs.com/pt-br/) e [Sequelize](https://sequelize.org/).

O update de imagens foi feito utilizando o armazenamento [S3](https://aws.amazon.com/pt/s3/).

Autenticação JWT.

## Front-end

Feito com ReactJS utilizando principalmente as libs [Framer Motion](https://www.framer.com/motion/) e [styled components](https://styled-components.com/).


## Configuração

Para rodar o servidor é necessário setar algumas variáveis de ambiente no .env do back-end:

| Option | Description |
| ------ | ------ |
| SERVER_PORT | Port the server will run on |
| SERVER_JWT | true or false |
| SERVER_JWT_SECRET | JWT secret |
| SERVER_JWT_TIMEOUT | JWT duration time |
| DB_DIALECT | "mysql", "postgresql", among others |
| DB_HOST | Database host |
| DB_USER | Database username |
| DB_PASS | Database password |
| DB_NAME | Database name |
| AWS_KEYID | Access key ID |
| AWS_SECRETKEY | User secret key |
| AWS_BUCKET | Bucket name |


Em seguida carregar as migrations:
```bash
yarn sequelize db:create
```

No front-end é necessário configurar a url do AWS e do servidor que estão declaradas no arquivo const.js dentro da pasta utils.


## Execução 
Execução back-end:

```bash
# Instalar as dependências
yarn

# Criar o arquivo .env com as variáveis configuradas
cp .env.example .env

# Rodar o servidor
yarn dev
```

Execução front-end:

```bash
# Instalar as dependências
yarn

# Rodar o front-end
yarn start
```



<h5 align="center">
  ☕ Code and Coffee
</h5>