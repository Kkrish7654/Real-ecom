import {ActionTypes} from "../contents/action-type"

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectProduct = (product) => {
    return { 
        type:ActionTypes.SELECT_PRODUCTS,
        payload:product,
    }
}

export const removeSelectProduct = (product) => {
    return { 
        type:ActionTypes.REMOVE_PRODUCTS,
    }
}

