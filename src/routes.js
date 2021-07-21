import {
    ASPIRANT_ROUTE, DICTIONARIES_CERTIFICATION_RESULT_ROUTE,
    DICTIONARIES_CITY_ROUTE,
    DICTIONARIES_COUNTRY_ROUTE, DICTIONARIES_EDUCATION_FORM_ROUTE,
    DICTIONARIES_EDUCATION_LEVEL_ROUTE, DICTIONARIES_ENTERPRISE_AS_TREE_ROUTE,
    DICTIONARIES_ROUTE,
    DICTIONARIES_STREET_ROUTE, DICTIONARIES_SUBJECT_ROUTE,
    DICTIONARIES_TYPE_CONTACT_ROUTE,
    DICTIONARIES_TYPE_DOCUMENT_ROUTE,
    FACES_ROUTE,
    LOGIN_ROUTE
} from "./utils/consts";
import Aspirant from "./page/aspirant";
import Auth from "./page/auth";
import Dictionaries from "./components/dictionaries";
import Faces from "./components/faces";
import Home from "@material-ui/icons/Home";
import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FaceIcon from "@material-ui/icons/Face";
import DictDoc from "./components/dict-doc";
import DictEducationLevel from "./components/dict-education-level";
import DictCountry from "./components/dict-country";
import DictCity from "./components/dict-city";
import DictStreet from "./components/dict-street";
import DictContactType from "./components/dict-contact-type/dict-contact-type";
import DictSubject from "./components/dict-subject";
import DictEducationForm from "./components/dict-education-form";
import DictCertificationResult from "./components/dict-certification-result";
import DictEnterpriseAsTree from "./components/dict-enterprise-as-tree";

// список маршрутов для авторизированных пользователей
export const authRoutes = [
    {
        path: ASPIRANT_ROUTE,
        render: () => <Aspirant/>,
        exact: true,
        label: 'главная',
        icon: <Home/>
    },
    {
        path: FACES_ROUTE,
        render: () => <Faces/>,
        label: 'лица',
        icon: <FaceIcon/>,
        exact: true
    },
    {
        path: DICTIONARIES_ROUTE,
        render: () => <Dictionaries/>,
        exact: false,
        label: 'справочники',
        icon: <LibraryBooksIcon/>
    },
];

export const dictionariesSubRoutes = [
    {path: DICTIONARIES_TYPE_DOCUMENT_ROUTE, label: 'документы', component: <DictDoc/>},
    {path: DICTIONARIES_EDUCATION_LEVEL_ROUTE, label: 'уровни образования', component: <DictEducationLevel/>},
    {path: DICTIONARIES_COUNTRY_ROUTE, label: 'страны', component: <DictCountry/>},
    {path: DICTIONARIES_CITY_ROUTE, label: 'города', component: <DictCity/>},
    {path: DICTIONARIES_STREET_ROUTE, label: 'улицы', component: <DictStreet/>},
    {path: DICTIONARIES_TYPE_CONTACT_ROUTE, label: 'типы контактов', component: <DictContactType/>},
    {path: DICTIONARIES_SUBJECT_ROUTE, label: 'предметы', component: <DictSubject/>},
    {path: DICTIONARIES_EDUCATION_FORM_ROUTE, label: 'форма обучения', component: <DictEducationForm/>},
    {path: DICTIONARIES_CERTIFICATION_RESULT_ROUTE, label: 'результат аттестации', component: <DictCertificationResult/>},
    {path: DICTIONARIES_ENTERPRISE_AS_TREE_ROUTE, label: 'структура', component: <DictEnterpriseAsTree/>},
]

// список маршрутов для НЕавторизированных пользователей
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        render: () => <Auth/>,
        exact: true
    }
]