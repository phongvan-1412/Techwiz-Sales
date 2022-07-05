import { GET_CATEGORY, GET_CATEGORY_BY_ROOT } from "../actions/types";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:8000/api/selectactiveblog");
  dispatch({
    type: GET_CATEGORY,
    payload: res.data,
  });
};

export const getCategoriesById = (blog_id) => {
  return {
    type: GET_CATEGORY_BY_ROOT,
    payload: blog_id,
  };
};
