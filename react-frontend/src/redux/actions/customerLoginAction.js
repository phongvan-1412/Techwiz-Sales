import {
    GET_CUSTOMER,
  } from "./type";
  import axios from "axios";

  export const getCustomerInfo = () => async (dispatch) => {
    const res = await axios.get("http://127.0.0.1:8000/api/customerlogin");
    dispatch({
      type: GET_CUSTOMER,
      payload: res.data,
    });
  };