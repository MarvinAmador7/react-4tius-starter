import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore (preloadedState) {
  const store = compose (
    composeEnhancers(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
    ),
  )(createStore)(combineReducers({reducers, routing : routerReducer}));

  return store;
}