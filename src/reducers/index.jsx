import { combineReducers } from "redux";
import {ProductReducer,SelectProductReducer} from "./ProductReducers";

const reducers = combineReducers(
    {
        allProducts:ProductReducer,
        product:SelectProductReducer
    }
)

export default reducers;