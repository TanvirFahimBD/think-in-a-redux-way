import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { productReducer } from "./productCounter/productReducer";

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware())
);
export default store;
