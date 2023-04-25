import { combineReducers } from "redux";
import UserReducer from "./userReducer";
//import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allUsers: UserReducer,
    //allProducts: productReducer,


});

export default reducers;