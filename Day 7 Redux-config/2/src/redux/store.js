import { combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from './counter/reducer';
import { reducer as todoReducer} from './todo/reducer';
import { reducer as authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
    auth:authReducer
})

export const store = legacy_createStore(rootReducer);
