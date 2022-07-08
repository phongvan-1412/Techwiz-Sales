import { combineReducers } from "redux";
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducers from "./cartReducers";

export default combineReducers({
    category: categoriesReducer,
    product: productsReducer,
    cart: cartReducers
});

