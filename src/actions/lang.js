import { setLocale } from 'react-redux-i18n';

export const CHANGE_LANG  = 'CHANGE_LANG';

export function changeLang (lang) {
  return (dispatch) => {
    dispatch(setLocale(lang));
  };
}