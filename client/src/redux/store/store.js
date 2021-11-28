import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from "../reducers/cart.reducer.js";
import {productsReducer} from "../reducers/products.reducer.js";
import {userReducer} from "../reducers/user.reducer.js";
import { brandReducer } from "../reducers/brand.reducer.js";
import { filtersReducer } from "../reducers/filters.reducer.js";
import thunk from "redux-thunk" ;




const store= createStore(
	combineReducers({
		cart: cartReducer,
		products: productsReducer,
		user: userReducer,
		brand: brandReducer,
		filters: filtersReducer
	}), composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;