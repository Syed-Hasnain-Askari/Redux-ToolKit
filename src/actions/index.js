export const updateUserCredentials = (username, password) => {
  return {
    type: 'UPDATE_USER_CREDENTIALS',
    payload: { username, password },
  };
};
