import React from "react";
import {AspirantApiContext} from "./aspirant-api-context";
import AspirantApiService from "../../../api/aspirant-api-service";
import {useDispatch, useSelector} from "react-redux";
import {deleteDictDoc, fetchDictDoc, insertDictDoc, updateDictDoc} from "../../../actions/dict-doc-actions";
import {
    getDatasetDictDocSelector,
    getErrorDictDocSelector,
    getIsLoadingDictDocSelector
} from "../../../selectors/dict-doc-selectors";
import {getIsAuth} from "../../../selectors/user-selector";
import {clearMessage, setDisappearingMessage, setMessage} from "../../../actions/messages-actions";
import {
    getDatasetDictCountrySelector,
    getErrorDictCountrySelector,
    getIsLoadingDictCountrySelector
} from "../../../selectors/dict-country-selectors";
import {
    deleteDictCountry,
    fetchDictCountry,
    insertDictCountry,
    updateDictCountry
} from "../../../actions/dict-country-actions";
import {
    deleteDictEducationLevels,
    fetchDictEducationLevels,
    insertDictEducationLevels, updateDictEducationLevels
} from "../../../actions/dict-education-level-actions";
import {
    getDatasetDictEducationLevelsSelector,
    getErrorDictEducationLevelsSelector,
    getIsLoadingDictEducationLevelsSelector
} from "../../../selectors/dict-education-level-selectors";
import {
    getDatasetDictCitySelector,
    getErrorDictCitySelector,
    getIsLoadingDictCitySelector
} from "../../../selectors/dict-city-selectors";
import {deleteDictCity, fetchDictCity, insertDictCity, updateDictCity} from "../../../actions/dict-city-actions";
import {
    getDatasetDictStreetSelector,
    getErrorDictStreetSelector,
    getIsLoadingDictStreetSelector
} from "../../../selectors/dict-street-selectors";
import {
    deleteDictStreet,
    fetchDictStreet,
    insertDictStreet,
    updateDictStreet
} from "../../../actions/dict-street-actions";
import {
    getDatasetDictContactTypeSelector, getErrorDictContactTypeSelector,
    getIsLoadingDictContactTypeSelector
} from "../../../selectors/dict-contact-type-selectors";
import {
    deleteDictContactType,
    fetchDictContactType,
    insertDictContactType, updateDictContactType
} from "../../../actions/dict-contact-type-actions";
import {
    getDatasetDictSubjectSelector, getErrorDictSubjectSelector,
    getIsLoadingDictSubjectSelector
} from "../../../selectors/dict-subject-selectors";
import {
    deleteDictSubject,
    fetchDictSubject,
    insertDictSubject,
    updateDictSubject
} from "../../../actions/dict-subject-actions";
import {
    deleteDictEducationForm,
    fetchDictEducationForm,
    insertDictEducationForm, updateDictEducationForm
} from "../../../actions/dict-education-form-actions";
import {
    getDatasetDictEducationFormSelector, getErrorDictEducationFormSelector,
    getIsLoadingDictEducationFormSelector
} from "../../../selectors/dict-education-form-selectors";
import {
    getDatasetDictCertificationResultSelector, getErrorDictCertificationResultSelector,
    getIsLoadingDictCertificationResultSelector
} from "../../../selectors/dict-certification-result-selectors";
import {
    deleteDictCertificationResult,
    fetchDictCertificationResult,
    insertDictCertificationResult, updateDictCertificationResult
} from "../../../actions/dict-certification-result-actions";
import {
    getDatasetAsTreeDictEnterpriseSelector,
    getDatasetDictEnterpriseSelector, getErrorDictEnterpriseSelector,
    getIsLoadingDictEnterpriseSelector
} from "../../../selectors/dict-enterprise-selectors";
import {
    deleteDictEnterprise,
    fetchDictEnterprise,
    insertDictEnterprise, updateDictEnterprise
} from "../../../actions/dict-enterprise-actions";
import {
    getDatasetFacesSelector,
    getErrorFacesSelector,
    getIsLoadingFacesSelector
} from "../../../selectors/faces-selectors";
import {
    deleteFaces,
    fetchFaces,
    fetchOneFace,
    insertFaces,
    refreshRecordFaces,
    updateFaces
} from "../../../actions/faces-actions";
import {
    getDatasetDependsOnIdFaceNamesSelector,
    getDatasetFaceNamesSelector,
    getErrorFaceNamesSelector,
    getIsLoadingFaceNamesSelector
} from "../../../selectors/face-names-selectors";
import {deleteFaceNames, fetchFaceNames, insertFaceNames, updateFaceNames} from "../../../actions/face-names-actions";
import {
    getDatasetDependsOnIdFaceDocumentsSelector,
    getDatasetFaceDocumentsSelector, getErrorFaceDocumentsSelector,
    getIsLoadingFaceDocumentsSelector
} from "../../../selectors/face-documents-selectors";
import {
    deleteFaceDocuments,
    fetchFaceDocuments,
    insertFaceDocuments,
    updateFaceDocuments
} from "../../../actions/face-documents-actions";
import {
    getDatasetDependsOnIdFaceCitizenshipsSelector,
    getDatasetFaceCitizenshipsSelector, getErrorFaceCitizenshipsSelector,
    getIsLoadingFaceCitizenshipsSelector
} from "../../../selectors/face-citizenships-selectors";
import {
    deleteFaceCitizenships,
    fetchFaceCitizenships,
    insertFaceCitizenships, updateFaceCitizenships
} from "../../../actions/face-citizenships-actions";
import {
    getDatasetDependsOnIdFaceEducationsSelector,
    getDatasetFaceEducationsSelector, getErrorFaceEducationsSelector,
    getIsLoadingFaceEducationsSelector
} from "../../../selectors/face-educations-selectors";
import {
    deleteFaceEducations,
    fetchFaceEducations,
    insertFaceEducations, updateFaceEducations
} from "../../../actions/face-educations-actions";
import {
    getDatasetDependsOnIdFaceWorksSelector,
    getDatasetFaceWorksSelector,
    getErrorFaceWorksSelector,
    getIsLoadingFaceWorksSelector
} from "../../../selectors/face-works-selectors";
import {deleteFaceWorks, fetchFaceWorks, insertFaceWorks, updateFaceWorks} from "../../../actions/face-works-actions";
import {
    getDatasetDependsOnIdFaceResidencesSelector,
    getDatasetFaceResidencesSelector, getErrorFaceResidencesSelector,
    getIsLoadingFaceResidencesSelector
} from "../../../selectors/face-residences-selectors";
import {
    deleteFaceResidences,
    fetchFaceResidences,
    insertFaceResidences, updateFaceResidences
} from "../../../actions/face-residences-actions";
import {
    getDatasetDependsOnIdFaceContactsSelector,
    getDatasetFaceContactsSelector, getErrorFaceContactsSelector,
    getIsLoadingFaceContactsSelector
} from "../../../selectors/face-contacts-selectors";
import {
    deleteFaceContacts,
    fetchFaceContacts,
    insertFaceContacts,
    updateFaceContacts
} from "../../../actions/face-contacts-actions";
import {
    getDatasetDependsOnIdFaceOrdersSelector,
    getDatasetFaceOrdersSelector,
    getErrorFaceOrdersSelector,
    getIsLoadingFaceOrdersSelector
} from "../../../selectors/face-orders-selectors";
import {
    deleteFaceOrders,
    fetchFaceOrders,
    insertFaceOrders,
    updateFaceOrders
} from "../../../actions/face-orders-actions";
import {
    getDatasetDependsOnIdFaceEntranceExaminSelector,
    getDatasetFaceEntranceExaminSelector, getErrorFaceEntranceExaminSelector,
    getIsLoadingFaceEntranceExaminSelector
} from "../../../selectors/face-entrance-examin-selectors";
import {
    deleteFaceEntranceExamin,
    fetchFaceEntranceExamin,
    insertFaceEntranceExamin, updateFaceEntranceExamin
} from "../../../actions/face-entrance-examin-actions";
import {
    getDatasetDependsOnIdFaceAspirantSelector,
    getDatasetFaceAspirantSelector, getDatasetToFlatFaceAspirantSelector, getErrorFaceAspirantSelector,
    getIsLoadingFaceAspirantSelector
} from "../../../selectors/face-aspirant-selectors";
import {
    deleteFaceAspirant,
    fetchFaceAspirant,
    insertFaceAspirant,
    updateFaceAspirant
} from "../../../actions/face-aspirant-actions";
import {
    getDatasetFacesAcademicAdvisorSelector,
    getDatasetToFlatFacesAcademicAdvisorSelector,
    getErrorFacesAcademicAdvisorSelector,
    getIsLoadingFacesAcademicAdvisorSelector
} from "../../../selectors/faces-academic-advisor-selectors";
import {
    deleteFaceAcademicAdvisor,
    fetchFaceAcademicAdvisor,
    insertFaceAcademicAdvisor, updateFaceAcademicAdvisor
} from "../../../actions/faces-academic-advisor-actions";
import {
    getDatasetDependsOnIdFaceScientificPublSelector,
    getDatasetFaceScientificPublSelector, getErrorFaceScientificPublSelector,
    getIsLoadingFaceScientificPublSelector
} from "../../../selectors/face-scientific-publ-selectors";
import {
    deleteFaceScientificPubl,
    fetchFaceScientificPubl,
    insertFaceScientificPubl, updateFaceScientificPubl
} from "../../../actions/face-scientific-publ-actions";
import {
    getDatasetDependsOnIdFaceCertificationResultSelector,
    getDatasetFaceCertificationResultSelector, getErrorFaceCertificationResultSelector,
    getIsLoadingFaceCertificationResultSelector
} from "../../../selectors/face-certification-result-selectors";
import {
    deleteFaceCertificationResult,
    fetchFaceCertificationResult,
    insertFaceCertificationResult, updateFaceCertificationResult
} from "../../../actions/face-certification-result-actions";
import {
    getDatasetDependsOnIdFaceBusinessTripSelector,
    getDatasetFaceBusinessTripSelector, getErrorFaceBusinessTripSelector,
    getIsLoadingFaceBusinessTripSelector
} from "../../../selectors/face-business-trip-selectors";
import {
    deleteFaceBusinessTrip,
    fetchFaceBusinessTrip,
    insertFaceBusinessTrip, updateFaceBusinessTrip
} from "../../../actions/face-business-trip-actions";
import {
    getDatasetDependsOnIdFaceExaminationsSelector,
    getDatasetFaceExaminationsSelector, getErrorFaceExaminationsSelector,
    getIsLoadingFaceExaminationsSelector
} from "../../../selectors/face-examinations-selectors";
import {
    deleteFaceExaminations,
    fetchFaceExaminations,
    insertFaceExaminations, updateFaceExaminations
} from "../../../actions/face-examinations-actions";
import {
    getDatasetOrdersSelector,
    getErrorOrdersSelector,
    getIsLoadingOrdersSelector
} from "../../../selectors/orders-selectors";
import {deleteOrders, fetchOneOrder, fetchOrders, insertOrders, updateOrders} from "../../../actions/orders-actions";
import {
    getDatasetDependsOnIdOrderFacesSelector,
    getDatasetOrderFacesSelector, getDatasetToFlatOrderFacesSelector,
    getErrorOrderFacesSelector,
    getIsLoadingOrderFacesSelector
} from "../../../selectors/order-faces-selectors";
import {
    deleteOrderFaces, fetchOrderFaces,
    insertOrderFaces,
    updateOrderFaces
} from "../../../actions/order-faces-actions";
import {
    getDatasetDictDirectionSelector, getErrorDictDirectionSelector,
    getIsLoadingDictDirectionSelector
} from "../../../selectors/dict-direction-selectors";
import {
    deleteDictDirection,
    fetchDictDirection,
    insertDictDirection,
    updateDictDirection
} from "../../../actions/dict-direction-actions";
import {
    getDatasetDictAllSelector,
    getDatasetDictDirectionalitySelector, getDatasetDictSpecialtySelector, getErrorDictDirectionalitySelector,
    getIsLoadingDictDirectionalitySelector
} from "../../../selectors/dict-directionality-selectors";
import {
    deleteDictDirectionalityAndSpecialty,
    fetchDictDirectionalityAndSpecialty,
    insertDictDirectionalityAndSpecialty, updateDictDirectionalityAndSpecialty
} from "../../../actions/dict-directionality-and-specialty-actions";
import {
    getDatasetDependsOnIdFaceAspirantOrdersSelector,
    getDatasetFaceAspirantOrdersSelector,
    getErrorFaceAspirantOrdersSelector, getIsLoadingFaceAspirantOrdersSelector
} from "../../../selectors/face-aspirant-orders-selectors";
import {
    deleteAspirantOrders,
    fetchAspirantOrders,
    insertAspirantOrders, updateAspirantOrders
} from "../../../actions/face-aspirant-orders-actions";
import {
    getDatasetDependsOnIdFacesAspirantsSelector,
    getDatasetFacesAspirantsSelector,
    getDatasetToFlatFacesAspirantsSelector, getErrorFacesAspirantsSelector, getIsLoadingFacesAspirantsSelector
} from "../../../selectors/faces-aspirants-selectors";
import {
    deleteFacesAspirants,
    fetchFacesAspirants,
    insertFacesAspirants, updateFacesAspirants
} from "../../../actions/faces-aspirants-actions";

export const AspirantApi = ({children}) => {
    const aspirantApiService = new AspirantApiService();

    const dispatch = useDispatch();
    const isAuth = useSelector(state => getIsAuth(state));

    //const dictDoc = useSelector(state => getDictDocSelector(state));
    //const messages = useSelector(state => state.messages)

    const messages = {
        messages: useSelector(state => state.messages),
        pushMessage: (message, typeMessage) => {
            dispatch(setMessage(message, typeMessage));
        },
        destroyMessage: () => {
            dispatch(clearMessage());
        },
        pushDisappearingMessage: (message, typeMessage, timeout) => {
            setDisappearingMessage(message, typeMessage, timeout)(dispatch)
        },
    }

    const dictDoc = {
        dataset: useSelector(state => getDatasetDictDocSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictDocSelector(state)),
        error: useSelector(state => getErrorDictDocSelector(state)),
        fetch: async () => {
            await fetchDictDoc(aspirantApiService.dictDocAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictDoc(rec)(aspirantApiService.dictDocAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictDoc(id)(aspirantApiService.dictDocAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictDoc(rec)(aspirantApiService.dictDocAPI, dispatch);
        }
    }

    const dictCountry = {
        dataset: useSelector(state => getDatasetDictCountrySelector(state)),
        isLoading: useSelector(state => getIsLoadingDictCountrySelector(state)),
        error: useSelector(state => getErrorDictCountrySelector(state)),
        fetch: async () => {
            await fetchDictCountry(aspirantApiService.dictCountryAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictCountry(rec)(aspirantApiService.dictCountryAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictCountry(id)(aspirantApiService.dictCountryAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictCountry(rec)(aspirantApiService.dictCountryAPI, dispatch);
        }
    }

    const dictCity = {
        dataset: useSelector(state => getDatasetDictCitySelector(state)),
        isLoading: useSelector(state => getIsLoadingDictCitySelector(state)),
        error: useSelector(state => getErrorDictCitySelector(state)),
        fetch: async () => {
            await fetchDictCity(aspirantApiService.dictCityAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictCity(rec)(aspirantApiService.dictCityAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictCity(id)(aspirantApiService.dictCityAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictCity(rec)(aspirantApiService.dictCityAPI, dispatch);
        }
    }

    const dictStreet = {
        dataset: useSelector(state => getDatasetDictStreetSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictStreetSelector(state)),
        error: useSelector(state => getErrorDictStreetSelector(state)),
        fetch: async () => {
            await fetchDictStreet(aspirantApiService.dictStreetAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictStreet(rec)(aspirantApiService.dictStreetAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictStreet(id)(aspirantApiService.dictStreetAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictStreet(rec)(aspirantApiService.dictStreetAPI, dispatch);
        }
    }

    const dictEducationLevels = {
        dataset: useSelector(state => getDatasetDictEducationLevelsSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictEducationLevelsSelector(state)),
        error: useSelector(state => getErrorDictEducationLevelsSelector(state)),
        fetch: async () => {
            await fetchDictEducationLevels(aspirantApiService.dictEducationLevelAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictEducationLevels(rec)(aspirantApiService.dictEducationLevelAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictEducationLevels(id)(aspirantApiService.dictEducationLevelAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictEducationLevels(rec)(aspirantApiService.dictEducationLevelAPI, dispatch);
        }
    }

    const dictContactType = {
        dataset: useSelector(state => getDatasetDictContactTypeSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictContactTypeSelector(state)),
        error: useSelector(state => getErrorDictContactTypeSelector(state)),
        fetch: async () => {
            await fetchDictContactType(aspirantApiService.dictContactTypeAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictContactType(rec)(aspirantApiService.dictContactTypeAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictContactType(id)(aspirantApiService.dictContactTypeAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictContactType(rec)(aspirantApiService.dictContactTypeAPI, dispatch);
        }
    }

    const dictSubject = {
        dataset: useSelector(state => getDatasetDictSubjectSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictSubjectSelector(state)),
        error: useSelector(state => getErrorDictSubjectSelector(state)),
        fetch: async () => {
            await fetchDictSubject(aspirantApiService.dictSubjectAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictSubject(rec)(aspirantApiService.dictSubjectAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictSubject(id)(aspirantApiService.dictSubjectAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictSubject(rec)(aspirantApiService.dictSubjectAPI, dispatch);
        }
    }

    const dictEducationForm = {
        dataset: useSelector(state => getDatasetDictEducationFormSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictEducationFormSelector(state)),
        error: useSelector(state => getErrorDictEducationFormSelector(state)),

        fetch: async () => {
            await fetchDictEducationForm(aspirantApiService.dictEducationFormAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictEducationForm(rec)(aspirantApiService.dictEducationFormAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictEducationForm(id)(aspirantApiService.dictEducationFormAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictEducationForm(rec)(aspirantApiService.dictEducationFormAPI, dispatch);
        }
    }

    const dictCertificationResult = {
        dataset: useSelector(state => getDatasetDictCertificationResultSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictCertificationResultSelector(state)),
        error: useSelector(state => getErrorDictCertificationResultSelector(state)),

        fetch: async () => {
            await fetchDictCertificationResult(aspirantApiService.dictCertificationResultAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictCertificationResult(rec)(aspirantApiService.dictCertificationResultAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictCertificationResult(id)(aspirantApiService.dictCertificationResultAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictCertificationResult(rec)(aspirantApiService.dictCertificationResultAPI, dispatch);
        }
    }

    const dictDirection = {
        dataset: useSelector(getDatasetDictDirectionSelector),
        isLoading: useSelector(getIsLoadingDictDirectionSelector),
        error: useSelector(getErrorDictDirectionSelector),

        fetch: async () => {
            await fetchDictDirection(aspirantApiService.dictDirectionAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictDirection(rec)(aspirantApiService.dictDirectionAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictDirection(id)(aspirantApiService.dictDirectionAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictDirection(rec)(aspirantApiService.dictDirectionAPI, dispatch);
        }
    }

    const dictDirectionalityAndSpecialty = {
        datasetAll: useSelector(getDatasetDictAllSelector),
        datasetDirectionality: useSelector(getDatasetDictDirectionalitySelector),
        datasetSpecialty: useSelector(getDatasetDictSpecialtySelector),
        isLoading: useSelector(getIsLoadingDictDirectionalitySelector),
        error: useSelector(getErrorDictDirectionalitySelector),

        fetch: async () => {
            await fetchDictDirectionalityAndSpecialty(aspirantApiService.dictDirectionalityAndSpecialtyAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictDirectionalityAndSpecialty(rec)(aspirantApiService.dictDirectionalityAndSpecialtyAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictDirectionalityAndSpecialty(id)(aspirantApiService.dictDirectionalityAndSpecialtyAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictDirectionalityAndSpecialty(rec)(aspirantApiService.dictDirectionalityAndSpecialtyAPI, dispatch);
        }
    }

    const dictEnterprise = {
        dataset: useSelector(getDatasetDictEnterpriseSelector),
        datasetAsTree: useSelector(getDatasetAsTreeDictEnterpriseSelector),
        isLoading: useSelector(getIsLoadingDictEnterpriseSelector),
        error: useSelector(getErrorDictEnterpriseSelector),

        fetch: async () => {
            await fetchDictEnterprise(aspirantApiService.dictEnterpriseAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertDictEnterprise(rec)(aspirantApiService.dictEnterpriseAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteDictEnterprise(id)(aspirantApiService.dictEnterpriseAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateDictEnterprise(rec)(aspirantApiService.dictEnterpriseAPI, dispatch);
        }
    }

    const faces = {
        dataset: useSelector(getDatasetFacesSelector),
        isLoading: useSelector(getIsLoadingFacesSelector),
        error: useSelector(getErrorFacesSelector),

        fetch: async () => {
            await fetchFaces(aspirantApiService.facesAPI, dispatch)
        },
        fetchOne: async (id) => {
            await fetchOneFace(id)(aspirantApiService.facesAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaces(rec)(aspirantApiService.facesAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaces(id)(aspirantApiService.facesAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaces(rec)(aspirantApiService.facesAPI, dispatch);
        }
    }

    const faceNames = {
        dataset: useSelector(getDatasetFaceNamesSelector),
        isLoading: useSelector(getIsLoadingFaceNamesSelector),
        error: useSelector(getErrorFaceNamesSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceNamesSelector),

        fetch: async (faceId) => {
            await fetchFaceNames(faceId)(aspirantApiService.faceNamesAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceNames(rec)({
                faceNamesAPI: aspirantApiService.faceNamesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceNames(id)({
                faceNamesAPI: aspirantApiService.faceNamesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceNames(rec)({
                faceNamesAPI: aspirantApiService.faceNamesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        // refreshRec: async (id) => {
        //     await refreshRecordFaces(id)(aspirantApiService.faceNamesAPI, dispatch);
        // }
    }

    const faceDocuments = {
        dataset: useSelector(getDatasetFaceDocumentsSelector),
        isLoading: useSelector(getIsLoadingFaceDocumentsSelector),
        error: useSelector(getErrorFaceDocumentsSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceDocumentsSelector),

        fetch: async (faceId) => {
            await fetchFaceDocuments(faceId)(aspirantApiService.faceDocumentsAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceDocuments(rec)({
                faceDocumentsAPI: aspirantApiService.faceDocumentsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceDocuments(id)({
                faceDocumentsAPI: aspirantApiService.faceDocumentsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceDocuments(rec)({
                faceDocumentsAPI: aspirantApiService.faceDocumentsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceCitizenships = {
        dataset: useSelector(getDatasetFaceCitizenshipsSelector),
        isLoading: useSelector(getIsLoadingFaceCitizenshipsSelector),
        error: useSelector(getErrorFaceCitizenshipsSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceCitizenshipsSelector),

        fetch: async (faceId) => {
            await fetchFaceCitizenships(faceId)(aspirantApiService.faceCitizenshipsAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceCitizenships(rec)({
                faceCitizenshipsAPI: aspirantApiService.faceCitizenshipsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceCitizenships(id)({
                faceCitizenshipsAPI: aspirantApiService.faceCitizenshipsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceCitizenships(rec)({
                faceCitizenshipsAPI: aspirantApiService.faceCitizenshipsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceEducations = {
        dataset: useSelector(getDatasetFaceEducationsSelector),
        isLoading: useSelector(getIsLoadingFaceEducationsSelector),
        error: useSelector(getErrorFaceEducationsSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceEducationsSelector),

        fetch: async (faceId) => {
            await fetchFaceEducations(faceId)(aspirantApiService.faceEducationsAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceEducations(rec)({
                faceEducationsAPI: aspirantApiService.faceEducationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceEducations(id)({
                faceEducationsAPI: aspirantApiService.faceEducationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceEducations(rec)({
                faceEducationsAPI: aspirantApiService.faceEducationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceWorks = {
        dataset: useSelector(getDatasetFaceWorksSelector),
        isLoading: useSelector(getIsLoadingFaceWorksSelector),
        error: useSelector(getErrorFaceWorksSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceWorksSelector),

        fetch: async (faceId) => {
            await fetchFaceWorks(faceId)(aspirantApiService.faceWorksAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceWorks(rec)({
                faceWorksAPI: aspirantApiService.faceWorksAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceWorks(id)({
                faceWorksAPI: aspirantApiService.faceWorksAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceWorks(rec)({
                faceWorksAPI: aspirantApiService.faceWorksAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceResidences = {
        dataset: useSelector(getDatasetFaceResidencesSelector),
        isLoading: useSelector(getIsLoadingFaceResidencesSelector),
        error: useSelector(getErrorFaceResidencesSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceResidencesSelector),

        fetch: async (faceId) => {
            await fetchFaceResidences(faceId)(aspirantApiService.faceResidencesAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceResidences(rec)({
                faceResidencesAPI: aspirantApiService.faceResidencesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceResidences(id)({
                faceResidencesAPI: aspirantApiService.faceResidencesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceResidences(rec)({
                faceResidencesAPI: aspirantApiService.faceResidencesAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceContacts = {
        dataset: useSelector(getDatasetFaceContactsSelector),
        isLoading: useSelector(getIsLoadingFaceContactsSelector),
        error: useSelector(getErrorFaceContactsSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceContactsSelector),

        fetch: async (faceId) => {
            await fetchFaceContacts(faceId)(aspirantApiService.faceContactsAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceContacts(rec)({
                faceContactsAPI: aspirantApiService.faceContactsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceContacts(id)({
                faceContactsAPI: aspirantApiService.faceContactsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceContacts(rec)({
                faceContactsAPI: aspirantApiService.faceContactsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceOrders = {
        dataset: useSelector(getDatasetFaceOrdersSelector),
        isLoading: useSelector(getIsLoadingFaceOrdersSelector),
        error: useSelector(getErrorFaceOrdersSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceOrdersSelector),

        fetch: async (faceId) => {
            await fetchFaceOrders(faceId)(aspirantApiService.faceOrdersAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceOrders(rec)({
                faceOrdersAPI: aspirantApiService.faceOrdersAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceOrders(id)({
                faceOrdersAPI: aspirantApiService.faceOrdersAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceOrders(rec)({
                faceOrdersAPI: aspirantApiService.faceOrdersAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceEntranceExamin = {
        dataset: useSelector(getDatasetFaceEntranceExaminSelector),
        isLoading: useSelector(getIsLoadingFaceEntranceExaminSelector),
        error: useSelector(getErrorFaceEntranceExaminSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceEntranceExaminSelector),

        fetch: async (faceId, isCandidateMin) => {
            await fetchFaceEntranceExamin(faceId, isCandidateMin)(aspirantApiService.faceEntranceExaminAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceEntranceExamin(rec)({
                faceEntranceExaminAPI: aspirantApiService.faceEntranceExaminAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceEntranceExamin(id)({
                faceEntranceExaminAPI: aspirantApiService.faceEntranceExaminAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceEntranceExamin(rec)({
                faceEntranceExaminAPI: aspirantApiService.faceEntranceExaminAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceAspirant = {
        dataset: useSelector(getDatasetFaceAspirantSelector),
        datasetModify: useSelector(getDatasetToFlatFaceAspirantSelector),
        isLoading: useSelector(getIsLoadingFaceAspirantSelector),
        error: useSelector(getErrorFaceAspirantSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceAspirantSelector),

        fetch: async (faceId) => {
            await fetchFaceAspirant(faceId)(aspirantApiService.faceAspirantAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceAspirant(rec)({
                faceAspirantAPI: aspirantApiService.faceAspirantAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceAspirant(id)({
                faceAspirantAPI: aspirantApiService.faceAspirantAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceAspirant(rec)({
                faceAspirantAPI: aspirantApiService.faceAspirantAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const facesAcademicAdvisor = {
        dataset: useSelector(getDatasetFacesAcademicAdvisorSelector),
        datasetModify: useSelector(getDatasetToFlatFacesAcademicAdvisorSelector),
        isLoading: useSelector(getIsLoadingFacesAcademicAdvisorSelector),
        error: useSelector(getErrorFacesAcademicAdvisorSelector),

        fetch: async () => {
            await fetchFaceAcademicAdvisor(aspirantApiService.faceAcademicAdvisorAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceAcademicAdvisor(rec)(aspirantApiService.faceAcademicAdvisorAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceAcademicAdvisor(id)(aspirantApiService.faceAcademicAdvisorAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceAcademicAdvisor(rec)(aspirantApiService.faceAcademicAdvisorAPI, dispatch);
        },
    }

    const faceScientificPubl = {
        dataset: useSelector(getDatasetFaceScientificPublSelector),
        isLoading: useSelector(getIsLoadingFaceScientificPublSelector),
        error: useSelector(getErrorFaceScientificPublSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceScientificPublSelector),

        fetch: async (faceId) => {
            await fetchFaceScientificPubl(faceId)(aspirantApiService.faceScientificPublAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceScientificPubl(rec)({
                faceScientificPublAPI: aspirantApiService.faceScientificPublAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceScientificPubl(id)({
                faceScientificPublAPI: aspirantApiService.faceScientificPublAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceScientificPubl(rec)({
                faceScientificPublAPI: aspirantApiService.faceScientificPublAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceCertificationResult = {
        dataset: useSelector(getDatasetFaceCertificationResultSelector),
        isLoading: useSelector(getIsLoadingFaceCertificationResultSelector),
        error: useSelector(getErrorFaceCertificationResultSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceCertificationResultSelector),

        fetch: async (faceId) => {
            await fetchFaceCertificationResult(faceId)(aspirantApiService.faceCertificationResultAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceCertificationResult(rec)({
                faceCertificationResultAPI: aspirantApiService.faceCertificationResultAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceCertificationResult(id)({
                faceCertificationResultAPI: aspirantApiService.faceCertificationResultAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceCertificationResult(rec)({
                faceCertificationResultAPI: aspirantApiService.faceCertificationResultAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceBusinessTrip = {
        dataset: useSelector(getDatasetFaceBusinessTripSelector),
        isLoading: useSelector(getIsLoadingFaceBusinessTripSelector),
        error: useSelector(getErrorFaceBusinessTripSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceBusinessTripSelector),

        fetch: async (faceId) => {
            await fetchFaceBusinessTrip(faceId)(aspirantApiService.faceBusinessTripAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceBusinessTrip(rec)({
                faceBusinessTripAPI: aspirantApiService.faceBusinessTripAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceBusinessTrip(id)({
                faceBusinessTripAPI: aspirantApiService.faceBusinessTripAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceBusinessTrip(rec)({
                faceBusinessTripAPI: aspirantApiService.faceBusinessTripAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const faceExaminations = {
        dataset: useSelector(getDatasetFaceExaminationsSelector),
        isLoading: useSelector(getIsLoadingFaceExaminationsSelector),
        error: useSelector(getErrorFaceExaminationsSelector),
        faceId: useSelector(getDatasetDependsOnIdFaceExaminationsSelector),

        fetch: async (faceId) => {
            await fetchFaceExaminations(faceId)(aspirantApiService.faceExaminationsAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFaceExaminations(rec)({
                faceExaminationsAPI: aspirantApiService.faceExaminationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFaceExaminations(id)({
                faceExaminationsAPI: aspirantApiService.faceExaminationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateFaceExaminations(rec)({
                faceExaminationsAPI: aspirantApiService.faceExaminationsAPI,
                facesAPI: aspirantApiService.facesAPI
            }, dispatch);
        },
    }

    const orders = {
        dataset: useSelector(getDatasetOrdersSelector),
        isLoading: useSelector(getIsLoadingOrdersSelector),
        error: useSelector(getErrorOrdersSelector),

        fetch: async () => {
            await fetchOrders(aspirantApiService.ordersAPI, dispatch)
        },
        fetchOne: async (id) => {
            await fetchOneOrder(id)(aspirantApiService.ordersAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertOrders(rec)(aspirantApiService.ordersAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteOrders(id)(aspirantApiService.ordersAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateOrders(rec)(aspirantApiService.ordersAPI, dispatch);
        }
    }

    const orderFaces = {
        dataset: useSelector(getDatasetOrderFacesSelector),
        datasetModify: useSelector(getDatasetToFlatOrderFacesSelector),
        isLoading: useSelector(getIsLoadingOrderFacesSelector),
        error: useSelector(getErrorOrderFacesSelector),
        orderId: useSelector(getDatasetDependsOnIdOrderFacesSelector),

        fetch: async (orderId) => {
            await fetchOrderFaces(orderId)(aspirantApiService.faceOrdersAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertOrderFaces(rec)(aspirantApiService.faceOrdersAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteOrderFaces(id)(aspirantApiService.faceOrdersAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateOrderFaces(rec)(aspirantApiService.faceOrdersAPI, dispatch);
        }
    }

    const faceAspirantOrders = {
        dataset: useSelector(getDatasetFaceAspirantOrdersSelector),
        isLoading: useSelector(getIsLoadingFaceAspirantOrdersSelector),
        error: useSelector(getErrorFaceAspirantOrdersSelector),
        faceAspirantId: useSelector(getDatasetDependsOnIdFaceAspirantOrdersSelector),

        fetch: async (orderId) => {
            await fetchAspirantOrders(orderId)(aspirantApiService.faceOrdersAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertAspirantOrders(rec)({
                aspirantOrderApi: aspirantApiService.faceOrdersAPI,
                aspirantApi: aspirantApiService.faceAspirantAPI
            }, dispatch);
        },
        deleteRec: async (id) => {
            await deleteAspirantOrders(id)({
                aspirantOrderApi: aspirantApiService.faceOrdersAPI,
                aspirantApi: aspirantApiService.faceAspirantAPI
            }, dispatch);
        },
        updateRec: async (rec) => {
            await updateAspirantOrders(rec)({
                aspirantOrderApi: aspirantApiService.faceOrdersAPI,
                aspirantApi: aspirantApiService.faceAspirantAPI
            }, dispatch);
        }
    }

    const facesAspirants = {
        dataset: useSelector(getDatasetFacesAspirantsSelector),
        datasetModify: useSelector(getDatasetToFlatFacesAspirantsSelector),
        isLoading: useSelector(getIsLoadingFacesAspirantsSelector),
        error: useSelector(getErrorFacesAspirantsSelector),
        faceId: useSelector(getDatasetDependsOnIdFacesAspirantsSelector),

        fetch: async () => {
            await fetchFacesAspirants(aspirantApiService.faceAspirantAPI, dispatch)
        },
        insertRec: async (rec) => {
            await insertFacesAspirants(rec)(aspirantApiService.faceAspirantAPI, dispatch);
        },
        deleteRec: async (id) => {
            await deleteFacesAspirants(id)(aspirantApiService.faceAspirantAPI, dispatch);
        },
        updateRec: async (rec) => {
            await updateFacesAspirants(rec)(aspirantApiService.faceAspirantAPI, dispatch);
        },
    }

    return (
        <AspirantApiContext.Provider value={{
            isAuth,
            //-----------------------
            messages,
            //-----------------------
            dictDoc,
            dictCountry,
            dictEducationLevels,
            dictCity,
            dictStreet,
            dictContactType,
            dictSubject,
            dictEducationForm,
            dictCertificationResult,
            dictEnterprise,
            dictDirection,
            dictDirectionalityAndSpecialty,
            //-----------------------
            faces,
            faceNames,
            faceDocuments,
            faceCitizenships,
            faceEducations,
            faceWorks,
            faceResidences,
            faceContacts,
            faceOrders,
            faceEntranceExamin,
            faceAspirant,
            faceScientificPubl,
            faceCertificationResult,
            faceBusinessTrip,
            faceExaminations,
            faceAspirantOrders,
            //--------------------------
            orders,
            orderFaces,
            //--------------------------
            facesAcademicAdvisor,
            //--------------------------
            facesAspirants,
        }}>
            {children}
        </AspirantApiContext.Provider>
    )

}