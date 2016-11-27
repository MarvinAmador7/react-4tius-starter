import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer } from 'react-redux-i18n';

import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import translations from '../i18n';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore (preloadedState) {
  const store = compose (
    composeEnhancers(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
    ),
  )(createStore)(combineReducers({
    reducers,
    i18n    : i18nReducer,
    routing : routerReducer}));

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translations));
    store.dispatch(setLocale('en'));

  return store;
}