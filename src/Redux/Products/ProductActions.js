import { ADD_CART, REMOVE_CART } from "./ProductTypes"

const addToCart = (id) => {
    return {
        type : ADD_CART,
        payload : id
    }
}

const removeFromCart = (id) => {
    return {
        type : REMOVE_CART,
        payload : id
    }
}

export {addToCart}
export {removeFromCart}