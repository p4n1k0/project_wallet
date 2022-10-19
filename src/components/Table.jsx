import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAction } from '../actions';

class Table extends Component {
  render() {
    const { expenses, deleteExpense } = this.props;

    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(
                Number(expense.value)
                * Number(expense.exchangeRates[expense.currency].ask)
              ).toFixed(2)}
            </td>
            <td>Real</td>
            <th>Editar</th>
            <td>
              /
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExpense(expense.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteAction(expense)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object),
  deleteExpense: PropTypes.func,
}.isRequired;

Table.defaultProps = {
  expenses: PropTypes.array,
  deleteExpense: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
