import { 
  SET_PRODUCT,
  SET_TALLE,
  SET_COUNT,
  ADD_ITEM_CART,
  ADD_EMPTY_CART,
  DELETE_EMPTY_CART
} from "../actions/cart.actions";

const initialState = {
  cart: [], // [{id: 1, talle: "S", count: 2}, {id: 1, talle: "M", count: 1}]
  cartProduct: {
    product: null,
    talle: "", // "S"
    count: 1 // 3
  },
  emptyCart: JSON.parse(localStorage.getItem('cart'))
};

export function cartReducer(state = initialState, { type, payload }) {

  switch(type){

    case ADD_EMPTY_CART:
      let product = []
      if (state.emptyCart) {
        let item = { ...state.cartProduct }
        let filtered = state.emptyCart.filter(x => 
          (x.product._id === state.cartProduct.product._id) 
          && 
          (x.talle === state.cartProduct.talle)
        );
        if (filtered.length === 0) {
          product = [...state.emptyCart, item]
          localStorage.setItem("cart", JSON.stringify(product));
          return {
            ...state,
            emptyCart: JSON.parse(localStorage.getItem('cart')),
            cart: JSON.parse(localStorage.getItem('cart')) 
          }

        }
        if (filtered.length === 1) {
          item = filtered[0];
          item = {
            ...item,
            count: item.count + state.cartProduct.count
          }
          let array = [];
          state.emptyCart.forEach(x => {
            if ((x.product._id !== item.product.id) && (x.talle !== item.talle)) {
              array.push(x)
            }
          })
          array = [...array, item]
          console.log(array)
          localStorage.setItem("cart", JSON.stringify(array));
          return {
            ...state,
            emptyCart: JSON.parse(localStorage.getItem('cart')),
            cart: JSON.parse(localStorage.getItem('cart')) 
          }
        }
      }
      product= [state.cartProduct]
      localStorage.setItem("cart", JSON.stringify(product));
      return {
        ...state,
        emptyCart: JSON.parse(localStorage.getItem('cart')),
        cart: JSON.parse(localStorage.getItem('cart')) 
      }  

     
    case ADD_ITEM_CART:
      return {
        ...state,
        cart: payload
      }  
    case SET_PRODUCT:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          product: payload
        }
      }

    case SET_TALLE:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          talle: payload
        }
      }

    case SET_COUNT:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          count: payload
        }
      }
      case DELETE_EMPTY_CART:
        return {
          ...state,
          emptyCart: localStorage.clear()
        }

    default:
      return state;
  }
}