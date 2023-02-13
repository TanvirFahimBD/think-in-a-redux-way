import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import { dynamicCounterReducer } from "./dynamicCounter/dynamicActionReducer";

export const rootReducer = combineReducers({
  dynamic: dynamicCounterReducer,
  counter: counterReducer,
});
