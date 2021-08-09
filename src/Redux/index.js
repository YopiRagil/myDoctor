/* eslint-disable linebreak-style */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducer/appReducer';

const rootReducer = combineReducers({
  produk: appReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
