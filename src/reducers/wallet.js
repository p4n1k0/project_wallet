// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_ACTION, COINS_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return {
      ...state,
      currencies: action.payload,
    };
  case COINS_ACTION:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default: return state;
  }
};

export default wallet;
