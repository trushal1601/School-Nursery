// rootReducer.js
import { combineReducers } from 'redux';
import { mainReducer, reducer } from './Recuder';

const rootReducer = combineReducers({
  main: mainReducer,
  cart: reducer,
});

export default rootReducer;
