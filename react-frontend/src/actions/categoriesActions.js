import { GET_CATEGORY} from "./type";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:8000/api/selectallcategory");
  dispatch({
    type: GET_CATEGORY,
    payload: res.data,
  });
};


