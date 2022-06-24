import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  remove = ({ target }) => {
    const { name } = target;
    const { expenses, removeItem } = this.props;
    const arrayList = expenses.filter((expense) => expense.id !== Number(name));

    removeItem(arrayList);
  }

  render() {
    const { expenses } = this.props;

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
        <th>Editar/Excluir</th>
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
            <td>
              {' '}
              <button
                type="button"
                name={ expense.id }
                data-testid="delete-btn"
                onClick={ this.remove }
              >
                X
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
  removeItem: (gastos) => dispatch(deleteAction(gastos)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object),
  removeItem: PropTypes.func,
}.isRequired;

Table.defaultProps = {
  expenses: PropTypes.array,
  removeItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
