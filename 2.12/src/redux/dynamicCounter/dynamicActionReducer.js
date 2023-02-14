import { DDECREMENT, DINCREMENT } from "./dynamicActionTypes";

const dynamicInitialState = {
  value: 0,
};

export const dynamicCounterReducer = (state = dynamicInitialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
