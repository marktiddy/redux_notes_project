import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

//This calls our root reducer and creates a store from it. Remember our root reducer is an empty object
//export default createStore(rootReducer);

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
