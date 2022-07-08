import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
  } from "../actions/type";
  
  const initialState = {
    products: [], 
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
        return {
          ...state,
          //products: action.payload
        };
  
      case DELETE_PRODUCT_FROM_CART:
        return {
          ...state,
          products: state.products.filter(
            (product) => product.product_id !== action.payload
          ),
        };

      default:
        return state;
    }
  }
  