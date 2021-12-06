import axios from 'axios';

export const ADD_ITEM_CART = "ADD_ITEM_TO_CART";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_TALLE = "SET_TALLE";
export const SET_COUNT = "SET_COUNT";
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM ';
export const ADD_EMPTY_CART='ADD_EMPTY_CART';
export const DELETE_EMPTY_CART = 'DELETE_EMPTY_CART';



/* Esta usaríamos cuando esté el back del carrito del usuario (y los usuarios gg).
Lo que recibe esta función por parámetro (cartProduct) es un objeto con info del item
y del usuario. */

export const addItemToCart = (obj) => async (dispatch) => { 
    console.log(obj)
    const { data } = await axios.put(`/user/cart/${obj.email}`, obj.producto)
    return dispatch({
        type: ADD_ITEM_CART,
        payload: data
    })
}  

export const addEmptyCart = (product) => {
    return {
        type: ADD_EMPTY_CART,
        payload: product
    }
}


export const DeleteItemCart = (id) => {
    return {
        type: DELETE_CART_ITEM ,
        payload: id
    }
}

export const DeleteEmptyCart = () => {
    return {
        type: DELETE_EMPTY_CART
    }
}

export const setProduct = (object) => {
    return {
        type: SET_PRODUCT,
        payload: object
    }
}

export const setTalle = (string) => {
    return {
        type: SET_TALLE,
        payload: string
    }
}

export const setCount = (number) => {
    return {
        type: SET_COUNT,
        payload: number
    }
}