import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./Reducers";

let devtools = (x) => x;

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true });
}

export default function configureStore(initialState = {}) {
  // Add more middleware with passing more parameters to [applyMiddleware]
  const middlewareEnhancer = applyMiddleware(thunkMiddleware);

  const composeEnhancer = compose(middlewareEnhancer, devtools);

  const store = createStore(rootReducer, initialState, composeEnhancer);
  return store;
}
