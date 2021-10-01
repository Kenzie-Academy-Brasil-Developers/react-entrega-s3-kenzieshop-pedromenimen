import { REMOVE_PRODUCT } from "./actionTypes.js";
import { ADD_PRODUCT } from "./actionTypes.js";

export const addToCart = (product) => ({ type: ADD_PRODUCT, product });
export const removeFromCart = (product) => ({ type: REMOVE_PRODUCT, product });
