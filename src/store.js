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
import dictEnterpriseReducer from "./reducers/dict-enterprise-reducers";
import facesReducer from "./reducers/faces-reducers";
import faceNamesReducer from "./reducers/face-names-reducers";
import faceDocumentsReducer from "./reducers/face-documents-reducers";
import faceCitizenshipsReducer from "./reducers/face-citizenships-reducers";
import faceEducationsReducer from "./reducers/face-educations-reducers";
import faceWorksReducer from "./reducers/face-works-reducers";
import faceResidencesReducer from "./reducers/face-residences-reducers";
import faceContactsReducer from "./reducers/face-contacts-reducers";
import faceOrdersReducer from "./reducers/face-orders-reducers";
import faceEntranceExaminReducer from "./reducers/face-entrance-examin-reducers";
import faceAspirantReducer from "./reducers/face-aspirant-reducers";
import faceAcademicAdvisorReducer from "./reducers/face-academic-advisor-reducers";
import faceScientificPublReducer from "./reducers/face-scientific-publ-reducers";
import faceCertificationResultReducer from "./reducers/face-certification-result-reducers";
import faceBusinessTripReducer from "./reducers/face-business-trip-reducers";
import faceExaminationsReducer from "./reducers/face-examinations-reducers";

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
    dictEnterprise: dictEnterpriseReducer,
    faces: facesReducer,
    faceNames: faceNamesReducer,
    faceDocuments: faceDocumentsReducer,
    faceCitizenships: faceCitizenshipsReducer,
    faceEducations: faceEducationsReducer,
    faceWorks: faceWorksReducer,
    faceResidences: faceResidencesReducer,
    faceContacts: faceContactsReducer,
    faceOrders: faceOrdersReducer,
    faceEntranceExamin: faceEntranceExaminReducer,
    faceAspirant: faceAspirantReducer,
    faceAcademicAdvisor: faceAcademicAdvisorReducer,
    faceScientificPubl: faceScientificPublReducer,
    faceCertificationResult: faceCertificationResultReducer,
    faceBusinessTrip: faceBusinessTripReducer,
    faceExaminations: faceExaminationsReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
