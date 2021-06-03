import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
const reducers__function = combineReducers({
  allproducts: productReducer,
});
export default reducers__function;
