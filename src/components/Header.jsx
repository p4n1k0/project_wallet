import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.handleSum = this.handleSum.bind(this);
  }

  handleSum() {
    const { expenses } = this.props;
    const sumExpenses = expenses.map((expense) => Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask))
      .reduce((exp1, exp2) => exp1 + exp2, 0);
    return sumExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <section>
        <header>
          <div className="email">
            <p>E-mail:</p>
            <span data-testid="email-field">{email}</span>
          </div>
          <div className="total_expense">
            <p>Despesa Total R$:</p>
            <p data-testid="total-field">{this.handleSum()}</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object),
};

Header.defaultProps = { expenses: PropTypes.array };

export default connect(mapStateToProps)(Header);
