import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';
import './Login.css';

const INITIAL_STATE = {
  button: true,
  email: '',
  password: '',
};

class Login extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleEmail = ({ target }) => {
    const { value } = target;

    this.setState({ email: value });
    this.loginValidate();
  };

  handlePassword = ({ target }) => {
    const { value } = target;

    this.setState({ password: value });
    this.loginValidate();
  };

  // ref: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/ , usei este código como base
  loginValidate = () => {
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const six = 6;

    if (re.test(email) && password.length + 1 >= six) this.setState({ button: false });
    else this.setState({ button: true });
  };

  handleButton = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;

    dispatch(userAction(email));
    history.push('/carteira');
  };

  render() {
    const { button } = this.state;

    return (
      <div className="container">
        <form>
          <label htmlFor="email">
            <p>E-mail:</p>
            <input
              type="email"
              data-testid="email-input"
              required
              onChange={ this.handleEmail }
            />
          </label>
          <label htmlFor="password">
            <p>Senha:</p>
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handlePassword }
            />
          </label>
          <button
            type="button"
            disabled={ button }
            onClick={ this.handleButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

Login.defaultProps = { history: PropTypes.push };

export default connect()(Login);
