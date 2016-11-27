export const FETCH_WELCOME_MESSAGE  = 'FETCH_WELCOME_MESSAGE';

export function fetchWelcomeMessage () {
  return (dispatch) => {
    dispatch({
      type    : FETCH_WELCOME_MESSAGE,
      payload : {
        message     : 'Welcome to the new 4tius web Application',
        description : 'React - Redux - Webpack - Immutable - ES6',
      },
    });
  };
}