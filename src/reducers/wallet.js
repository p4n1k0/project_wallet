// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CURRENCIES_ACTION,
  COINS_ACTION,
  DELETE_ACTION,
  EDIT_EXPENSE,
} from '../actions';

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
  case DELETE_ACTION:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].map((expense) => (
        expense.id === action.payload.id ? { ...expense, ...action.payload } : expense
      )),
    };
  default:
    return state;
  }
};

export default wallet;
