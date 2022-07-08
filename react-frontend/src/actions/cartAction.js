import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  SUBMIT_CART,
  GET_CART,
} from "./type";
import axios from "axios";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const getCart = () => {
  return {
    type: GET_CART,
  };
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
