import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from '../state/reducer';

const store = createStore(rootReducer, applyMiddleware(reduxLogger));

export default store;
