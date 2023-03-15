import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
