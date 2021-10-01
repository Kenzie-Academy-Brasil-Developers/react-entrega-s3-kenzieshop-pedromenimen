import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    case REMOVE_PRODUCT:
      const newList = state.filter((product) => product.id !== action.product.id);
      return newList;
    default:
      return state;
  }
};

export default cartReducer;
