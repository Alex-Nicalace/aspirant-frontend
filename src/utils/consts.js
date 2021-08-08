// константы для всплывающий сообщений *********************************************************************************
export const SUCCESS = 'success'
export const INFO = 'info'
export const WARNING = 'warning'
export const ERROR = 'error'
export const DURATION_MESSAGE = 3000

// константы роутов ****************************************************************************************************
export const LOGIN_ROUTE = '/login'

export const REGISTRATION_USER_ROUTE = '/registration'

export const ASPIRANT_ROUTE = '/'

export const FACES_ROUTE = '/faces'
export const FACES_LIST_ROUTE = FACES_ROUTE + '/'
export const FACE_CARD_ROUTE = FACES_LIST_ROUTE + ':id'

export const ORDERS_ROUTE = '/orders'

export const ACADEMIC_ADVISOR_ROUTE = '/academic-advisor'

export const DICTIONARIES_ROUTE = '/dictionaries'
export const DICTIONARIES_TYPE_DOCUMENT_ROUTE = DICTIONARIES_ROUTE + '/type-document'
export const DICTIONARIES_EDUCATION_LEVEL_ROUTE = DICTIONARIES_ROUTE + '/education-level'
export const DICTIONARIES_COUNTRY_ROUTE = DICTIONARIES_ROUTE + '/country'
export const DICTIONARIES_CITY_ROUTE = DICTIONARIES_ROUTE + '/city'
export const DICTIONARIES_STREET_ROUTE = DICTIONARIES_ROUTE + '/street'
export const DICTIONARIES_TYPE_CONTACT_ROUTE = DICTIONARIES_ROUTE + '/type-contact'
export const DICTIONARIES_SUBJECT_ROUTE = DICTIONARIES_ROUTE + '/subject'
export const DICTIONARIES_EDUCATION_FORM_ROUTE = DICTIONARIES_ROUTE + '/education-form'
export const DICTIONARIES_CERTIFICATION_RESULT_ROUTE = DICTIONARIES_ROUTE + '/certification-result'
export const DICTIONARIES_ENTERPRISE_AS_TREE_ROUTE = DICTIONARIES_ROUTE + '/enterprise-as-tree'
export const DICTIONARIES_DIRECTION_ROUTE = DICTIONARIES_ROUTE + '/direction'
export const DICTIONARIES_DIRECTIONALITY_ROUTE = DICTIONARIES_ROUTE + '/directionality'

// redux ***************************************************************************************************************
export const FETCH_USER_ACTION = 'FETCH_USER_ACTION'
export const REQUEST_USER_ACTION = 'REQUEST_USER_ACTION'
export const FAILURE_USER_ACTION = 'FAILURE_USER_ACTION'

export const SET_MESSAGE_ACTION = 'SET_MESSAGE_ACTION'
export const CLEAR_MESSAGE_ACTION = 'CLEAR_MESSAGE_ACTION'

export const FETCH_DICT_DOC_ACTION = 'FETCH_DICT_DOC_ACTION'
export const REQUEST_DICT_DOC_ACTION = 'REQUEST_DICT_DOC_ACTION'
export const FAILURE_DICT_DOC_ACTION = 'FAILURE_DICT_DOC_ACTION'
export const INS_DICT_DOC_ACTION = 'INS_DICT_DOC_ACTION'
export const DEL_DICT_DOC_ACTION = 'DEL_DICT_DOC_ACTION'
export const UPD_DICT_DOC_ACTION = 'UPD_DICT_DOC_ACTION'

export const FETCH_DICT_COUNTRY_ACTION = 'FETCH_DICT_COUNTRY_ACTION'
export const REQUEST_DICT_COUNTRY_ACTION = 'REQUEST_DICT_COUNTRY_ACTION'
export const FAILURE_DICT_COUNTRY_ACTION = 'FAILURE_DICT_COUNTRY_ACTION'
export const INS_DICT_COUNTRY_ACTION = 'INS_DICT_COUNTRY_ACTION'
export const DEL_DICT_COUNTRY_ACTION = 'DEL_DICT_COUNTRY_ACTION'
export const UPD_DICT_COUNTRY_ACTION = 'UPD_DICT_COUNTRY_ACTION'

export const FETCH_DICT_EDUCATION_LEVELS_ACTION = 'FETCH_DICT_EDUCATION_LEVELS_ACTION'
export const REQUEST_DICT_EDUCATION_LEVELS_ACTION = 'REQUEST_DICT_EDUCATION_LEVELS_ACTION'
export const FAILURE_DICT_EDUCATION_LEVELS_ACTION = 'FAILURE_DICT_EDUCATION_LEVELS_ACTION'
export const INS_DICT_EDUCATION_LEVELS_ACTION = 'INS_DICT_EDUCATION_LEVELS_ACTION'
export const DEL_DICT_EDUCATION_LEVELS_ACTION = 'DEL_DICT_EDUCATION_LEVELS_ACTION'
export const UPD_DICT_EDUCATION_LEVELS_ACTION = 'UPD_DICT_EDUCATION_LEVELS_ACTION'

export const FETCH_DICT_CITY_ACTION = 'FETCH_DICT_CITY_ACTION'
export const REQUEST_DICT_CITY_ACTION = 'REQUEST_DICT_CITY_ACTION'
export const FAILURE_DICT_CITY_ACTION = 'FAILURE_DICT_CITY_ACTION'
export const INS_DICT_CITY_ACTION = 'INS_DICT_CITY_ACTION'
export const DEL_DICT_CITY_ACTION = 'DEL_DICT_CITY_ACTION'
export const UPD_DICT_CITY_ACTION = 'UPD_DICT_CITY_ACTION'

export const FETCH_DICT_STREET_ACTION = 'FETCH_DICT_STREET_ACTION'
export const REQUEST_DICT_STREET_ACTION = 'REQUEST_DICT_STREET_ACTION'
export const FAILURE_DICT_STREET_ACTION = 'FAILURE_DICT_STREET_ACTION'
export const INS_DICT_STREET_ACTION = 'INS_DICT_STREET_ACTION'
export const DEL_DICT_STREET_ACTION = 'DEL_DICT_STREET_ACTION'
export const UPD_DICT_STREET_ACTION = 'UPD_DICT_STREET_ACTION'

export const FETCH_DICT_CONTACT_TYPE_ACTION = 'FETCH_DICT_CONTACT_TYPE_ACTION'
export const REQUEST_DICT_CONTACT_TYPE_ACTION = 'REQUEST_DICT_CONTACT_TYPE_ACTION'
export const FAILURE_DICT_CONTACT_TYPE_ACTION = 'FAILURE_DICT_CONTACT_TYPE_ACTION'
export const INS_DICT_CONTACT_TYPE_ACTION = 'INS_DICT_CONTACT_TYPE_ACTION'
export const DEL_DICT_CONTACT_TYPE_ACTION = 'DEL_DICT_CONTACT_TYPE_ACTION'
export const UPD_DICT_CONTACT_TYPE_ACTION = 'UPD_DICT_CONTACT_TYPE_ACTION'

export const FETCH_DICT_SUBJECT_ACTION = 'FETCH_DICT_SUBJECT_ACTION'
export const REQUEST_DICT_SUBJECT_ACTION = 'REQUEST_DICT_SUBJECT_ACTION'
export const FAILURE_DICT_SUBJECT_ACTION = 'FAILURE_DICT_SUBJECT_ACTION'
export const INS_DICT_SUBJECT_ACTION = 'INS_DICT_SUBJECT_ACTION'
export const DEL_DICT_SUBJECT_ACTION = 'DEL_DICT_SUBJECT_ACTION'
export const UPD_DICT_SUBJECT_ACTION = 'UPD_DICT_SUBJECT_ACTION'

export const FETCH_DICT_EDUCATION_FORM_ACTION = 'FETCH_DICT_EDUCATION_FORM_ACTION'
export const REQUEST_DICT_EDUCATION_FORM_ACTION = 'REQUEST_DICT_EDUCATION_FORM_ACTION'
export const FAILURE_DICT_EDUCATION_FORM_ACTION = 'FAILURE_DICT_EDUCATION_FORM_ACTION'
export const INS_DICT_EDUCATION_FORM_ACTION = 'INS_DICT_EDUCATION_FORM_ACTION'
export const DEL_DICT_EDUCATION_FORM_ACTION = 'DEL_DICT_EDUCATION_FORM_ACTION'
export const UPD_DICT_EDUCATION_FORM_ACTION = 'UPD_DICT_EDUCATION_FORM_ACTION'

export const FETCH_DICT_CERTIFICATION_RESULT_ACTION = 'FETCH_DICT_CERTIFICATION_RESULT_ACTION'
export const REQUEST_DICT_CERTIFICATION_RESULT_ACTION = 'REQUEST_DICT_CERTIFICATION_RESULT_ACTION'
export const FAILURE_DICT_CERTIFICATION_RESULT_ACTION = 'FAILURE_DICT_CERTIFICATION_RESULT_ACTION'
export const INS_DICT_CERTIFICATION_RESULT_ACTION = 'INS_DICT_CERTIFICATION_RESULT_ACTION'
export const DEL_DICT_CERTIFICATION_RESULT_ACTION = 'DEL_DICT_CERTIFICATION_RESULT_ACTION'
export const UPD_DICT_CERTIFICATION_RESULT_ACTION = 'UPD_DICT_CERTIFICATION_RESULT_ACTION'

export const FETCH_DICT_ENTERPRISE_ACTION = 'FETCH_DICT_ENTERPRISE_ACTION'
export const REQUEST_DICT_ENTERPRISE_ACTION = 'REQUEST_DICT_ENTERPRISE_ACTION'
export const FAILURE_DICT_ENTERPRISE_ACTION = 'FAILURE_DICT_ENTERPRISE_ACTION'
export const INS_DICT_ENTERPRISE_ACTION = 'INS_DICT_ENTERPRISE_ACTION'
export const DEL_DICT_ENTERPRISE_ACTION = 'DEL_DICT_ENTERPRISE_ACTION'
export const UPD_DICT_ENTERPRISE_ACTION = 'UPD_DICT_ENTERPRISE_ACTION'

export const FETCH_FACES_ACTION = 'FETCH_FACES_ACTION'
export const REQUEST_FACES_ACTION = 'REQUEST_FACES_ACTION'
export const FAILURE_FACES_ACTION = 'FAILURE_FACES_ACTION'
export const INS_FACES_ACTION = 'INS_FACES_ACTION'
export const DEL_FACES_ACTION = 'DEL_FACES_ACTION'
export const UPD_FACES_ACTION = 'UPD_FACES_ACTION'

export const FETCH_FACE_NAMES_ACTION = 'FETCH_FACE_NAMES_ACTION'
export const REQUEST_FACE_NAMES_ACTION = 'REQUEST_FACE_NAMES_ACTION'
export const FAILURE_FACE_NAMES_ACTION = 'FAILURE_FACE_NAMES_ACTION'
export const INS_FACE_NAMES_ACTION = 'INS_FACE_NAMES_ACTION'
export const DEL_FACE_NAMES_ACTION = 'DEL_FACE_NAMES_ACTION'
export const UPD_FACE_NAMES_ACTION = 'UPD_FACE_NAMES_ACTION'

export const FETCH_FACE_DOCUMENTS_ACTION = 'FETCH_FACE_DOCUMENTS_ACTION'
export const REQUEST_FACE_DOCUMENTS_ACTION = 'REQUEST_FACE_DOCUMENTS_ACTION'
export const FAILURE_FACE_DOCUMENTS_ACTION = 'FAILURE_FACE_DOCUMENTS_ACTION'
export const INS_FACE_DOCUMENTS_ACTION = 'INS_FACE_DOCUMENTS_ACTION'
export const DEL_FACE_DOCUMENTS_ACTION = 'DEL_FACE_DOCUMENTS_ACTION'
export const UPD_FACE_DOCUMENTS_ACTION = 'UPD_FACE_DOCUMENTS_ACTION'

export const FETCH_FACE_CITIZENSHIPS_ACTION = 'FETCH_FACE_CITIZENSHIPS_ACTION'
export const REQUEST_FACE_CITIZENSHIPS_ACTION = 'REQUEST_FACE_CITIZENSHIPS_ACTION'
export const FAILURE_FACE_CITIZENSHIPS_ACTION = 'FAILURE_FACE_CITIZENSHIPS_ACTION'
export const INS_FACE_CITIZENSHIPS_ACTION = 'INS_FACE_CITIZENSHIPS_ACTION'
export const DEL_FACE_CITIZENSHIPS_ACTION = 'DEL_FACE_CITIZENSHIPS_ACTION'
export const UPD_FACE_CITIZENSHIPS_ACTION = 'UPD_FACE_CITIZENSHIPS_ACTION'

export const FETCH_FACE_EDUCATIONS_ACTION = 'FETCH_FACE_EDUCATIONS_ACTION'
export const REQUEST_FACE_EDUCATIONS_ACTION = 'REQUEST_FACE_EDUCATIONS_ACTION'
export const FAILURE_FACE_EDUCATIONS_ACTION = 'FAILURE_FACE_EDUCATIONS_ACTION'
export const INS_FACE_EDUCATIONS_ACTION = 'INS_FACE_EDUCATIONS_ACTION'
export const DEL_FACE_EDUCATIONS_ACTION = 'DEL_FACE_EDUCATIONS_ACTION'
export const UPD_FACE_EDUCATIONS_ACTION = 'UPD_FACE_EDUCATIONS_ACTION'

export const FETCH_FACE_WORKS_ACTION = 'FETCH_FACE_WORKS_ACTION'
export const REQUEST_FACE_WORKS_ACTION = 'REQUEST_FACE_WORKS_ACTION'
export const FAILURE_FACE_WORKS_ACTION = 'FAILURE_FACE_WORKS_ACTION'
export const INS_FACE_WORKS_ACTION = 'INS_FACE_WORKS_ACTION'
export const DEL_FACE_WORKS_ACTION = 'DEL_FACE_WORKS_ACTION'
export const UPD_FACE_WORKS_ACTION = 'UPD_FACE_WORKS_ACTION'

export const FETCH_FACE_RESIDENCES_ACTION = 'FETCH_FACE_RESIDENCES_ACTION'
export const REQUEST_FACE_RESIDENCES_ACTION = 'REQUEST_FACE_RESIDENCES_ACTION'
export const FAILURE_FACE_RESIDENCES_ACTION = 'FAILURE_FACE_RESIDENCES_ACTION'
export const INS_FACE_RESIDENCES_ACTION = 'INS_FACE_RESIDENCES_ACTION'
export const DEL_FACE_RESIDENCES_ACTION = 'DEL_FACE_RESIDENCES_ACTION'
export const UPD_FACE_RESIDENCES_ACTION = 'UPD_FACE_RESIDENCES_ACTION'

export const FETCH_FACE_CONTACTS_ACTION = 'FETCH_FACE_CONTACTS_ACTION'
export const REQUEST_FACE_CONTACTS_ACTION = 'REQUEST_FACE_CONTACTS_ACTION'
export const FAILURE_FACE_CONTACTS_ACTION = 'FAILURE_FACE_CONTACTS_ACTION'
export const INS_FACE_CONTACTS_ACTION = 'INS_FACE_CONTACTS_ACTION'
export const DEL_FACE_CONTACTS_ACTION = 'DEL_FACE_CONTACTS_ACTION'
export const UPD_FACE_CONTACTS_ACTION = 'UPD_FACE_CONTACTS_ACTION'

export const FETCH_FACE_ORDERS_ACTION = 'FETCH_FACE_ORDERS_ACTION'
export const REQUEST_FACE_ORDERS_ACTION = 'REQUEST_FACE_ORDERS_ACTION'
export const FAILURE_FACE_ORDERS_ACTION = 'FAILURE_FACE_ORDERS_ACTION'
export const INS_FACE_ORDERS_ACTION = 'INS_FACE_ORDERS_ACTION'
export const DEL_FACE_ORDERS_ACTION = 'DEL_FACE_ORDERS_ACTION'
export const UPD_FACE_ORDERS_ACTION = 'UPD_FACE_ORDERS_ACTION'

export const FETCH_FACE_ENTRANCE_EXAMIN_ACTION = 'FETCH_FACE_ENTRANCE_EXAMIN_ACTION'
export const REQUEST_FACE_ENTRANCE_EXAMIN_ACTION = 'REQUEST_FACE_ENTRANCE_EXAMIN_ACTION'
export const FAILURE_FACE_ENTRANCE_EXAMIN_ACTION = 'FAILURE_FACE_ENTRANCE_EXAMIN_ACTION'
export const INS_FACE_ENTRANCE_EXAMIN_ACTION = 'INS_FACE_ENTRANCE_EXAMIN_ACTION'
export const DEL_FACE_ENTRANCE_EXAMIN_ACTION = 'DEL_FACE_ENTRANCE_EXAMIN_ACTION'
export const UPD_FACE_ENTRANCE_EXAMIN_ACTION = 'UPD_FACE_ENTRANCE_EXAMIN_ACTION'

export const FETCH_FACE_ASPIRANT_ACTION = 'FETCH_FACE_ASPIRANT_ACTION'
export const REQUEST_FACE_ASPIRANT_ACTION = 'REQUEST_FACE_ASPIRANT_ACTION'
export const FAILURE_FACE_ASPIRANT_ACTION = 'FAILURE_FACE_ASPIRANT_ACTION'
export const INS_FACE_ASPIRANT_ACTION = 'INS_FACE_ASPIRANT_ACTION'
export const DEL_FACE_ASPIRANT_ACTION = 'DEL_FACE_ASPIRANT_ACTION'
export const UPD_FACE_ASPIRANT_ACTION = 'UPD_FACE_ASPIRANT_ACTION'

export const FETCH_FACE_ACADEMIC_ADVISOR_ACTION = 'FETCH_FACE_ACADEMIC_ADVISOR_ACTION'
export const REQUEST_FACE_ACADEMIC_ADVISOR_ACTION = 'REQUEST_FACE_ACADEMIC_ADVISOR_ACTION'
export const FAILURE_FACE_ACADEMIC_ADVISOR_ACTION = 'FAILURE_FACE_ACADEMIC_ADVISOR_ACTION'
export const INS_FACE_ACADEMIC_ADVISOR_ACTION = 'INS_FACE_ACADEMIC_ADVISOR_ACTION'
export const DEL_FACE_ACADEMIC_ADVISOR_ACTION = 'DEL_FACE_ACADEMIC_ADVISOR_ACTION'
export const UPD_FACE_ACADEMIC_ADVISOR_ACTION = 'UPD_FACE_ACADEMIC_ADVISOR_ACTION'

export const FETCH_FACE_SCIENTIFIC_PUBL_ACTION = 'FETCH_FACE_SCIENTIFIC_PUBL_ACTION'
export const REQUEST_FACE_SCIENTIFIC_PUBL_ACTION = 'REQUEST_FACE_SCIENTIFIC_PUBL_ACTION'
export const FAILURE_FACE_SCIENTIFIC_PUBL_ACTION = 'FAILURE_FACE_SCIENTIFIC_PUBL_ACTION'
export const INS_FACE_SCIENTIFIC_PUBL_ACTION = 'INS_FACE_SCIENTIFIC_PUBL_ACTION'
export const DEL_FACE_SCIENTIFIC_PUBL_ACTION = 'DEL_FACE_SCIENTIFIC_PUBL_ACTION'
export const UPD_FACE_SCIENTIFIC_PUBL_ACTION = 'UPD_FACE_SCIENTIFIC_PUBL_ACTION'

export const FETCH_FACE_CERTIFICATION_RESULT_ACTION = 'FETCH_FACE_CERTIFICATION_RESULT_ACTION'
export const REQUEST_FACE_CERTIFICATION_RESULT_ACTION = 'REQUEST_FACE_CERTIFICATION_RESULT_ACTION'
export const FAILURE_FACE_CERTIFICATION_RESULT_ACTION = 'FAILURE_FACE_CERTIFICATION_RESULT_ACTION'
export const INS_FACE_CERTIFICATION_RESULT_ACTION = 'INS_FACE_CERTIFICATION_RESULT_ACTION'
export const DEL_FACE_CERTIFICATION_RESULT_ACTION = 'DEL_FACE_CERTIFICATION_RESULT_ACTION'
export const UPD_FACE_CERTIFICATION_RESULT_ACTION = 'UPD_FACE_CERTIFICATION_RESULT_ACTION'

export const FETCH_FACE_BUSINESS_TRIP_ACTION = 'FETCH_FACE_BUSINESS_TRIP_ACTION'
export const REQUEST_FACE_BUSINESS_TRIP_ACTION = 'REQUEST_FACE_BUSINESS_TRIP_ACTION'
export const FAILURE_FACE_BUSINESS_TRIP_ACTION = 'FAILURE_FACE_BUSINESS_TRIP_ACTION'
export const INS_FACE_BUSINESS_TRIP_ACTION = 'INS_FACE_BUSINESS_TRIP_ACTION'
export const DEL_FACE_BUSINESS_TRIP_ACTION = 'DEL_FACE_BUSINESS_TRIP_ACTION'
export const UPD_FACE_BUSINESS_TRIP_ACTION = 'UPD_FACE_BUSINESS_TRIP_ACTION'

export const FETCH_FACE_EXAMINATIONS_ACTION = 'FETCH_FACE_EXAMINATIONS_ACTION'
export const REQUEST_FACE_EXAMINATIONS_ACTION = 'REQUEST_FACE_EXAMINATIONS_ACTION'
export const FAILURE_FACE_EXAMINATIONS_ACTION = 'FAILURE_FACE_EXAMINATIONS_ACTION'
export const INS_FACE_EXAMINATIONS_ACTION = 'INS_FACE_EXAMINATIONS_ACTION'
export const DEL_FACE_EXAMINATIONS_ACTION = 'DEL_FACE_EXAMINATIONS_ACTION'
export const UPD_FACE_EXAMINATIONS_ACTION = 'UPD_FACE_EXAMINATIONS_ACTION'

export const FETCH_ORDERS_ACTION = 'FETCH_ORDERS_ACTION'
export const REQUEST_ORDERS_ACTION = 'REQUEST_ORDERS_ACTION'
export const FAILURE_ORDERS_ACTION = 'FAILURE_ORDERS_ACTION'
export const INS_ORDERS_ACTION = 'INS_ORDERS_ACTION'
export const DEL_ORDERS_ACTION = 'DEL_ORDERS_ACTION'
export const UPD_ORDERS_ACTION = 'UPD_ORDERS_ACTION'

export const FETCH_ORDER_FACES_ACTION = 'FETCH_ORDER_FACES_ACTION'
export const REQUEST_ORDER_FACES_ACTION = 'REQUEST_ORDER_FACES_ACTION'
export const FAILURE_ORDER_FACES_ACTION = 'FAILURE_ORDER_FACES_ACTION'
export const INS_ORDER_FACES_ACTION = 'INS_ORDER_FACES_ACTION'
export const DEL_ORDER_FACES_ACTION = 'DEL_ORDER_FACES_ACTION'
export const UPD_ORDER_FACES_ACTION = 'UPD_ORDER_FACES_ACTION'

export const FETCH_DICT_DIRECTION_ACTION = 'FETCH_DICT_DIRECTION_ACTION'
export const REQUEST_DICT_DIRECTION_ACTION = 'REQUEST_DICT_DIRECTION_ACTION'
export const FAILURE_DICT_DIRECTION_ACTION = 'FAILURE_DICT_DIRECTION_ACTION'
export const INS_DICT_DIRECTION_ACTION = 'INS_DICT_DIRECTION_ACTION'
export const DEL_DICT_DIRECTION_ACTION = 'DEL_DICT_DIRECTION_ACTION'
export const UPD_DICT_DIRECTION_ACTION = 'UPD_DICT_DIRECTION_ACTION'

export const FETCH_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'FETCH_DICT_DIRECTIONALITY_ACTION'
export const REQUEST_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'REQUEST_DICT_DIRECTIONALITY_ACTION'
export const FAILURE_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'FAILURE_DICT_DIRECTIONALITY_ACTION'
export const INS_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'INS_DICT_DIRECTIONALITY_ACTION'
export const DEL_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'DEL_DICT_DIRECTIONALITY_ACTION'
export const UPD_DICT_DIRECTIONALITY_AND_SPECIALTY_ACTION = 'UPD_DICT_DIRECTIONALITY_ACTION'