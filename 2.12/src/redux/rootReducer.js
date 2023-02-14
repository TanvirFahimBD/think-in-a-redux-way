import { combineReducers } from "redux";
import { dynamicCounterReducer } from "./dynamicCounter/dynamicActionReducer";

export const rootReducer = combineReducers({
  dynamic: dynamicCounterReducer
});
