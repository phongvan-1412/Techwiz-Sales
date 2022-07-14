import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_CATEGORY_SLIDE
} from "./type";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  //const res = await axios.get("http://127.0.0.1:8000/api/selectactiveblog");
  dispatch({
    type: GET_PRODUCTS,
    //payload: res.data,
  });
};

export const getProductsByCategory = (category_name) => {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: category_name,
  };
};

export const getProductsById = (blog_id) => {
  return {
    type: GET_PRODUCTS_BY_ID,
    payload: blog_id,
  };
};

export const productSlideCategorySelector1 = (category_name) => {
  return{
    type: GET_PRODUCTS_BY_CATEGORY_SLIDE,
    payload: category_name
  }
}

