import {
    GET_CATEGORY,
  } from "../actions/type";
  
  const initialState = {
    categories: [
    ],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case GET_CATEGORY:
        return {
          ...state,
          categories: action.payload
        };
  
      default:
        return state;
    }
  }
  