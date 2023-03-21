import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as productReducer} from "./Product/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  productReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
