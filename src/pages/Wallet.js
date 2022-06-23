import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { apiFetch } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(apiFetch());
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <Header />
        <p>{email}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
