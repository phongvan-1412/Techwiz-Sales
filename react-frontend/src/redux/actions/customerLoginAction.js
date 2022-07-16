import {
    GET_CUSTOMER,
  } from "./type";
  import axios from "axios";

  export const getCustomerInfo = () => async (dispatch) => {
    const res = await axios.get("http://127.0.0.1:8000/api/customerlogin");
    console.log(res.data);
    dispatch({
      type: GET_CUSTOMER,
      payload: res.data,
    });
  };