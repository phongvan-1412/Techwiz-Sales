import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_CART,
  UPDATE_PRODUCT_FROM_CART
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
    case ADD_PRODUCT_TO_CART: {
      let check = true;

      state.cart.forEach((items) => {
        items.forEach((item) => {
          if (item.product_SKU === getProductId(action.payload)) {
            check = false;
            return;
          }
        });
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
    case UPDATE_PRODUCT_FROM_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}

function getProductId(payload) {
  let product_id = 0;

  payload.map((item) => {
    product_id = item.product_SKU;
  });
  return product_id;
}
