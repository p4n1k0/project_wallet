export const COINS_ACTION = 'COINS_ACTION';

const coinsAction = ({ ...payload }) => ({ type: COINS_ACTION, payload });

const coins = (expense) => async (dispatch) => {
  try {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await endpoint.json();
    const { id, value, description, currency, method, tag } = expense;
    const result = { id, value, description, currency, method, tag, exchangeRates };

    dispatch(coinsAction(result));
  } catch (error) {
    console.log(error);
  }
};

export default coins;
