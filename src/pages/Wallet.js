import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiFetch } from '../actions/currencies';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(apiFetch());
  }

  render() {
    return <Header />;
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
