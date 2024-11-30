# Boas vindas ao repositório do projeto Wallet

Aqui você vai encontrar os detalhes de como foi estruturar o desenvolvimento do projeto a partir deste repositório.

---

# Sumário

- [Boas vindas ao repositório do projeto Wallet!](#boas-vindas-ao-repositório-do-projeto-wallet)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Configurando o Redux DevTools](#configurando-o-redux-devtools)
  - [Documentação da API de Cotações de Moedas](#documentação-da-api-de-cotações-de-moedas)
  - [Execução de testes unitários](#execução-dos-testes)
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

# Entregáveis

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
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Verifique que os testes estão executando:
  - `npm test` (os testes devem rodar e falhar)

---

# Como desenvolver

Nessa aplicação você deverá **obrigatoriamente** utilizar o seguinte formato do estado global:

```
{
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
}
```

É importante respeitar esse formato para que o avaliador funcione corretamente. Você pode adicionar novos campos ao seu estado global, mas essa estrutura básica deve se manter. Por exemplo, você pode adicionar uma propriedade `isFetching` no seu estado. Mas você **não** pode salvar as despesas em uma chave diferente de `wallet.expenses`.

**Observações Importantes:**

- Devido a estrutura que o avaliador utiliza para realizar os testes, é necessário que o seu Redux esteja configurado, ou seja, a store e os reducers estejam criados e conectados.
- É necessário que o `<Provider />` e o seu `<BrowserRouter />` estejam no arquivo index.js e não no `<App />`.
- Também será necessário a instalação da biblioteca PropTypes utilizando o comando `npm install prop-types`.

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto o linter ESLint. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodar o _linter_ localmente no projeto, execute o comando abaixo:

`npm run lint`

## Documentação da API de Cotações de Moedas

Sua página _web_ consome os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, é consultado o seguinte _endpoint_:

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

## Execução dos testes

Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar nítida essa configuração:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"><a /></a>
```

ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

Em alguns requisitos, utilizamos o `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

Afim de verificar a solução proposta, você pode executar todos os testes localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Para rodar apenas um teste, basta a utilização da função `.only` após o describe. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

![image](describe-only.png)
![image](only-all-green.png)

Caso queira avaliar apenas um tópico do requisito, você também pode usar o `.only` após o `test`.

![image](test-only.png)
![image](only-one-green.png)

---


