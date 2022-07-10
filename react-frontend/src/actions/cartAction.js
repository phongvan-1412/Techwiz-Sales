import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  SUBMIT_CART,
  GET_CART,
  UPDATE_PRODUCT_FROM_CART,
} from "./type";

export const addProductToCart = (product, quantity) => {
  const product_quantity = quantity;
  const product_subtotal = product_quantity * product.product_price;
  const newProduct = [
    {
      ...product,
      product_quantity,
      product_subtotal,
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

export const deleteProductFromCart = (product_SKU) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: product_SKU,
  };
};
export const submitCart = (products) => {
  return {
    type: SUBMIT_CART,
    payload: products,
  };
};
export const updateProductFromCart = (product, quantity) => {
  const product_quantity = quantity;
  const product_subtotal = product_quantity * product.product_price;
  const newProduct = [
    {
      ...product,
      product_quantity,
      product_subtotal,
    },
  ];
  return {
    type: UPDATE_PRODUCT_FROM_CART,
    payload: newProduct,
  };
};
