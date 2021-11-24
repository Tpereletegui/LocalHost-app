import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../actions/products.actions";

const initialState = {
  products: []
};



export function productsReducer(state = initialState, action) {
  switch(action.type){
    case GET_PRODUCTS:
      let products = [...action.payload];
      return {
        ...state,
        products: products
      }
    case GET_PRODUCTS_DETAILS:
      return {
        products: action.payload
      }

    default:
    return state;
  }
}