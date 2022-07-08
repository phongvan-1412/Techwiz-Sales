import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_CART,
} from "../actions/type";

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_PRODUCT_TO_CART:
      let check = true;
      state.cart.forEach((item) => {
        if (item.product_SKU === action.payload.product_SKU) {
          check = false;
        }
      });
      if (check) {
        return {
          cart: [action.payload, ...state.cart],
        };
      } else {
        return {
          ...state,
        };
      }

    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product_id !== item.payload),
      };
    //   case RESET_LIST:
    //     return {
    //       item: [...state, []],
    //     };
    default:
      return state;
  }
}
