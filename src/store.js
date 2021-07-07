import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dictDocReducer from "./reducers/dict-doc-reducer";
import userReducer from "./reducers/user-reducer";

const reducer = combineReducers({
    user: userReducer,
    dictDoc: dictDocReducer,

});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
