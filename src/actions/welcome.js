import { I18n } from 'react-redux-i18n';

export const FETCH_WELCOME_MESSAGE  = 'FETCH_WELCOME_MESSAGE';

export function fetchWelcomeMessage () {
  return (dispatch) => {
    dispatch({
      type    : FETCH_WELCOME_MESSAGE,
      payload : {
        message     : I18n.t('application.message'),
        description : I18n.t('application.description'),
      },
    });
  };
}