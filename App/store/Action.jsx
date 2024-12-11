// actions.js
import { ADDITION, SUBSTRACTION, ADD_TO_CART, REMOVE_FROM_CART } from './ActionType';

export const addition = () => ({
  type: ADDITION,
});

export const substraction = () => ({
  type: SUBSTRACTION,
});

export function addToCart(item) {
  console.log('action',item);
  
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