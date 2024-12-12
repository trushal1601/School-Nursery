import {
  ADDITION,
  SUBSTRACTION,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DATA,
} from './ActionType';

export const addition = () => ({
  type: ADDITION,
});

export const substraction = () => ({
  type: SUBSTRACTION,
});

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getDataFromApi(item) {
  return {
    type: GET_DATA,
    data: item,
  };
}
