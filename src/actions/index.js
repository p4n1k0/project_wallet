// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTION';

export const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export const currenciesAction = (payload) => ({
  type: CURRENCIES_ACTION,
  payload,
});

export const apiFetch = () => async (dispatch) => {
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await endpoint.json();
  const currencyFilter = Object.keys(data).filter((currency) => currency !== 'USDT');

  dispatch(currenciesAction(currencyFilter));
};
