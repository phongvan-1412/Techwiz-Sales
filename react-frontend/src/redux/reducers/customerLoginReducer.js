import {
    GET_CUSTOMER,
  } from "../actions/type";

const initialState = {
  customer: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
}
