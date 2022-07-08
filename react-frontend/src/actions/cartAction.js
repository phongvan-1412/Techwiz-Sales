import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  SUBMIT_CART,
  GET_CART,
  UPDATE_PRODUCT_FROM_CART,
} from "./type";
import axios from "axios";

export const addProductToCart = (product, quantity) => {
  const newProduct = [
    {
      product_SKU: product.product_SKU,
      category_name: product.category_name,
      emp_name: product.emp_name,
      product_price: product.product_price,
      product_name: product.product_name,
      product_quantity: quantity,
      product_detail: product.product_detail,
      product_subtotal: parseInt(product.product_price) * parseInt(quantity),
      product_thumbnail_name: product.product_thumbnail_name,
    },
  ];
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: newProduct,
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
export const updateProductFromCart = (product, quantity) => {
  const newProduct = [
    {
      product_SKU: product.product_SKU,
      category_name: product.category_name,
      emp_name: product.emp_name,
      product_price: product.product_price,
      product_name: product.product_name,
      product_quantity: quantity,
      product_detail: product.product_detail,
      product_subtotal: parseInt(product.product_price) * parseInt(quantity),
      product_thumbnail_name: product.product_thumbnail_name,
    },
  ];
  return {
    type: UPDATE_PRODUCT_FROM_CART,
    payload: newProduct,
  };
};
