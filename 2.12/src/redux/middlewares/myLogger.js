import { rootReducer } from "../rootReducer";

export const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`store: ${JSON.stringify(store.getState())}`);
  const upComingState = [action].reduce(rootReducer, store.getState());
  console.log(`upComingState: ${JSON.stringify(upComingState)}`);
  return next(action);
};
