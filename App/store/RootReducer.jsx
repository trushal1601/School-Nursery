// rootReducer.js
import { combineReducers } from 'redux';
import { getData, mainReducer, reducer } from './Recuder';

const rootReducer = combineReducers({
  main: mainReducer,
  cart: reducer,
  getDatas :getData
});

export default rootReducer;
