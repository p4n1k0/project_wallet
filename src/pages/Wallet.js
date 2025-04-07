import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiFetch, coins, editExpenseAction } from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';


const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  newOrEdit: 'new',
};

class Wallet extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(apiFetch());
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

  handleButton = () => {
    const { dispatch, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length;
    const expense = { id, value, description, currency, method, tag };

    dispatch(coins(expense));
    this.setState(INITIAL_STATE);
  }

  saveEditedExpense = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const expense = { value, description, currency, method, tag };
    dispatch(editExpenseAction(expense, id));
    this.setState(INITIAL_STATE);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, newOrEdit } = this.state;

    return (
      <section>
        <Header />
        <label htmlFor="value">
          Valor
          <input
            type="number"
            data-testid="value-input"
            onChange={this.handleValue}
            value={value}
          />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select
            id="currencies"
            data-testid="currency-input"
            onChange={this.handleCurrency}>
            {currencies.map((currencySelect, index) => (
              <option key={index}>{currencySelect}</option>))}
          </select>
        </label>
        <label htmlFor="methodInput">
          Método de pagamento:
          <select
            id="methodInput"
            data-testid="method-input"
            onChange={this.handleMethod}
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            id="tag"
            data-testid="tag-input"
            onChange={this.handleTag}
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Description
          <input
            data-testid="description-input"
            value={description}
            onChange={this.handleDescription}
          />
        </label>
        <button
          type="submit"
          onClick={this.handleButton}
        >
          Adicionar despesa
        </button>
        <button
          type="submit"
          onClick={this.saveEditedExpense}
        >
          Editar despesa
        </button>
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

Wallet.defaultProps = {
  expenses: PropTypes.array,
};

export default connect(mapStateToProps)(Wallet);
