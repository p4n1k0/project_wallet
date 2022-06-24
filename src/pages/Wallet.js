import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import currenciesAction from '../actions/currencies';
import coins from '../actions/coins';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(currenciesAction());
  }

  handleValue = ({ target }) => {
    const { value } = target;

    this.setState({ value });
  }

  handleDescription = ({ target }) => {
    const { value } = target;

    this.setState({ description: value });
  }

  handleCurrency = ({ target }) => {
    const { value } = target;

    this.setState({ currency: value });
  }

  handleMethod = ({ target }) => {
    const { value } = target;

    this.setState({ method: value });
  }

  handleTag = ({ target }) => {
    const { value } = target;

    this.setState({ tag: value });
  }

  handleClear = () => { this.setState({ value: 0, description: '' }); }

  handleButton = () => {
    const { dispatch, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length;
    const expense = { id, value, description, currency, method, tag };

    dispatch(coins(expense));
    this.handleClear();
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <section>
        <Header />
        <label htmlFor="value">
          Expenses
          <input
            type="number"
            data-testid="value-input"
            onChange={ this.handleValue }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            data-testid="description-input"
            onChange={ this.handleDescription }
            value={ description }
          />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies" onChange={ this.handleCurrency }>
            { currencies.map((currency) => <option key={ currency }>{currency}</option>) }
          </select>
        </label>
        <label htmlFor="methodInput">
          <select
            id="methodInput"
            data-testid="method-input"
            onChange={ this.handleMethod }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select id="tag" data-testid="tag-input" onChange={ this.handleTag }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleButton }>Adicionar despesa</button>
        <Table />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(Array).isRequired,
  expenses: PropTypes.arrayOf(Object),
};

Wallet.defaultProps = { expenses: PropTypes.array };

export default connect(mapStateToProps)(Wallet);
