import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <span data-testid="email-field">{`Email:${email}`}</span>
          <span data-testid="total-field">{this.handleSum()}</span>
          <p data-testid="header-currency-field">BRL</p>
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
