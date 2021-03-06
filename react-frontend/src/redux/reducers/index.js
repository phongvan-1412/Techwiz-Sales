import { combineReducers } from "redux";
import productsReducer from '../reducers/productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducers from "./cartReducers";
import categoryRootReducers from "./categoryRootReducers";
import customerLoginReducer from "./customerLoginReducer";

export default combineReducers({
    categories: categoriesReducer,
    product: productsReducer,
    cart: cartReducers,
    categoriesRoot: categoryRootReducers,
    customer: customerLoginReducer
});

