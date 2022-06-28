import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiFetch } from '../actions';

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(apiFetch());
  }

  render() {
    const { email } = this.props;

    return (
      <section>
        <header>
          <span data-testid="email-field">{`Email:${email}`}</span>
          <span data-testid="total-field">0</span>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
