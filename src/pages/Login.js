import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import userAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      button: true,
      email: '',
      password: '',
    };
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
    const minCharacter = 6;

    if (re.test(email) === true && password.length + 1 >= minCharacter) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
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
      <section>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            required
            onChange={ this.handleEmail }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            minLength="6"
            required
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
      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

Login.defaultProps = { history: PropTypes.push };

export default connect()(Login);
