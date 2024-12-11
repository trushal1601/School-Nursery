// reducer.js
import {
  ADDITION,
  SUBSTRACTION,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './ActionType';

const initialState = {
  counter: 0,
};
const initialState2 = [];

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBSTRACTION:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};

export const reducer = (state = initialState2, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('reducer', action);

      return [...state, action.data];
    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.name != action.data;
      });
      return [...result];
    default:
      return state;
  }
};
