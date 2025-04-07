import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAction } from '../actions';


class Table extends Component { 
  editExpense = (id) => {
    this.setState({ newOrEdit: 'edit', id });
  }

  render() {
    const { expenses, deleteActio } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              const currentCurrency = Object.entries(expense.exchangeRates)
                .find((currency) => currency[0] === expense.currency);
              const nameCurrency = currentCurrency[1].name.split('/');
              const currencyValue = currentCurrency[1].ask;
              const total = expense.value * currencyValue;
              return (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{nameCurrency[0]}</td>
                  <td>{Number(currencyValue).toFixed(2)}</td>
                  <td>{total.toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                      onClick={() => this.editExpense(expense.id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={() => deleteActio(expense.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteActio: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  deleteActio: (expense) => dispatch(deleteAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
