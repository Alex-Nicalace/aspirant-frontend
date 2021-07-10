import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dictDocReducer from "./reducers/dict-doc-reducer";
import userReducer from "./reducers/user-reducer";
import messagesReducer from "./reducers/messages-reducer";
import dictCountryReducer from "./reducers/dict-country-reducers";
import dictEducationLevelsReducer from "./reducers/dict-education-level-reducers";
import dictCityReducer from "./reducers/dict-city-reducers";

const reducer = combineReducers({
    user: userReducer,
    messages: messagesReducer,
    dictDoc: dictDocReducer,
    dictCountry: dictCountryReducer,
    dictEducationLevels: dictEducationLevelsReducer,
    dictCity: dictCityReducer,

});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
