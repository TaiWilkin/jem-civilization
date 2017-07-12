import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import { createSession } from 'redux-session';

const loggerMiddleware = createLogger()

const session = createSession({ ns: 'myproject' });

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    session
  )
)
