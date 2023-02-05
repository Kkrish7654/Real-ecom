import { Switch } from "@headlessui/react";
import {ActionTypes} from "../contents/action-type"
const initalState = {
    products:[]
}

export const ProductReducer = (state=initalState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const SelectProductReducer = (state={},{type,payload}) => {
    switch(type){
        case ActionTypes.SELECT_PRODUCTS:
            return {...state,...payload};
        case ActionTypes.REMOVE_PRODUCTS:
            return {}
        default:
            return state;
    }
}