# Boas vindas ao repositório do projeto GTWallet

Aqui você vai encontrar os detalhes de como foi estruturar o desenvolvimento do projeto a partir deste repositório.

---

# Sumário

- [Boas vindas ao repositório do projeto Wallet!](#boas-vindas-ao-repositório-do-projeto-wallet)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Documentação da API de Cotações de Moedas](#documentação-da-api-de-cotações-de-moedas)
  
---

# Habilidades

Neste projeto, sou capaz de:

- Criar um store Redux em aplicações React

- Criar reducers no Redux em aplicações React

- Criar actions no Redux em aplicações React

- Criar dispatchers no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---

## O que foi desenvolvido

Neste projeto eu desenvolvi uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar, remover e editar um gasto;
- Visualizar uma tabelas com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

## Desenvolvimento

Desenvolvimento de uma aplicação em React que usa Redux como ferramenta de manipulação de estado.

Através dessa aplicação, é possível realizar as operações básicas de criação e manipulação de um estado de redux.

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone git@github.com:p4n1k0/project_wallet.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd project_wallet`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (visualizar o projeto)
  - https://gtwallet.surge.sh
- Verifique que os testes estão executando:
  - `npm test` 

---

## Documentação da API de Cotações de Moedas

Minha página _web_ consome os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, é consultado o seguinte _endpoint_:

- <https://economia.awesomeapi.com.br/json/all>

O retorno desse endpoint será algo no formato:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

---


