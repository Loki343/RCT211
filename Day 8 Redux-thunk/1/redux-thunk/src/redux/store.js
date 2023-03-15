import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// const myMiddleware = (store) => (dispatch) => (action) => {
//   console.log("store:", store);
//   console.log("dispatch:", dispatch);
//   console.log("action:", action);
//   if (typeof action === "function") {
//     return action(dispatch);
//   }
//   return dispatch(action);
// };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
