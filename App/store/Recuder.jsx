import {
  ADDITION,
  SUBSTRACTION,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DATA,
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
      const existingItem = state.find(item => item.id === action.data.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.data.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        return [...state, {...action.data, quantity: 1}];
      }
    case REMOVE_FROM_CART:
      return state.reduce((result, item) => {
        if (item.id === action.data) {
          if (item.quantity > 1) {
            result.push({...item, quantity: item.quantity - 1});
          }
        } else {
          result.push(item);
        }
        return result;
      }, []);
    default:
      return state;
  }
};

export const getData = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    default:
      return state;
  }
};
