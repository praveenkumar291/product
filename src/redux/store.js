import { createStore } from "redux";
import reducers__function from "./reducers/index";
const store = createStore(
  reducers__function,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
