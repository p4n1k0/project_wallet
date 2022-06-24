// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { COINS_ACTION } from '../actions/coins';
import { CURRENCIES_ACTION } from '../actions/currencies';

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
