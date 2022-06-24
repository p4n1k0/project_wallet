// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';

const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export default userAction;
