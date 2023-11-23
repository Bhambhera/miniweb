import { combineReducers } from "redux";
import productReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
    product : productReducer
})

export default rootReducer