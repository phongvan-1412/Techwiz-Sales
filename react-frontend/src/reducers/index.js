import { combineReducers } from "redux";
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    category: categoriesReducer,
    product: productsReducer
});

