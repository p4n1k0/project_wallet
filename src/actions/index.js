// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTION';

const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

const currenciesAction = (payload) => ({
  type: CURRENCIES_ACTION,
  payload,
});

export const apiFetch = () => async (dispatch) => {
  try {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await endpoint.json();
    const currencies = Object.keys(data);
    const currencyFilter = currencies.filter((currency) => currency !== 'USDT');

    dispatch(currenciesAction(currencyFilter));
  } catch (error) {
    console.log(error);
  }
};

export default userAction;
