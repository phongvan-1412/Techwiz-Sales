import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  SUBMIT_CART,
} from "./type";
import axios from "axios";

export const addProductToCart = () => async (dispatch) => {
  //const res = await axios.get("http://127.0.0.1:8000/api/selectactiveblog");
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    //payload: res.data,
  });
};

export const deleteProductFromCart = (product_id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: product_id,
  };
};
export const submitCart = (products) => {
  return {
    type: SUBMIT_CART,
    payload: products,
  };
};
