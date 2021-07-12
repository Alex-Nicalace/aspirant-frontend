import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dictDocReducer from "./reducers/dict-doc-reducer";
import userReducer from "./reducers/user-reducer";
import messagesReducer from "./reducers/messages-reducer";
import dictCountryReducer from "./reducers/dict-country-reducers";
import dictEducationLevelsReducer from "./reducers/dict-education-level-reducers";
import dictCityReducer from "./reducers/dict-city-reducers";
import dictStreetReducer from "./reducers/dict-street-reducers";
import dictContactTypeReducer from "./reducers/contact-type-reducers";
import dictSubjectReducer from "./reducers/dict-subject-reducers";
import dictEducationFormReducer from "./reducers/dict-education-form-reducers";
import dictCertificationResultReducer from "./reducers/dict-certification-result-reducers";

const reducer = combineReducers({
    user: userReducer,
    messages: messagesReducer,
    dictDoc: dictDocReducer,
    dictCountry: dictCountryReducer,
    dictEducationLevels: dictEducationLevelsReducer,
    dictCity: dictCityReducer,
    dictStreet: dictStreetReducer,
    dictContactType: dictContactTypeReducer,
    dictSubject: dictSubjectReducer,
    dictEducationForm: dictEducationFormReducer,
    dictCertificationResult: dictCertificationResultReducer,

});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
