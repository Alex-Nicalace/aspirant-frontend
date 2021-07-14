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
            await fetchDictCity (aspirantApiService.dictCityAPI, dispatch)
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
            await fetchDictStreet (aspirantApiService.dictStreetAPI, dispatch)
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

    const dictEnterprise = {
        dataset: useSelector(state => getDatasetDictEnterpriseSelector(state)),
        datasetAsTree: useSelector(state => getDatasetAsTreeDictEnterpriseSelector(state)),
        isLoading: useSelector(state => getIsLoadingDictEnterpriseSelector(state)),
        error: useSelector(state => getErrorDictEnterpriseSelector(state)),

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

    return (
        <AspirantApiContext.Provider value={{
            messages,
            // pushMessage,
            // destroyMessage,
            // pushDisappearingMessage,
            dictDoc,
            // fetchDictDocApi,
            // insertDictDocApi,
            // deleteDictDocApi,
            // updateDictDocApi,
            dictCountry,
            dictEducationLevels,
            dictCity,
            dictStreet,
            dictContactType,
            dictSubject,
            dictEducationForm,
            dictCertificationResult,
            dictEnterprise,
            isAuth,
        }}>
            {children}
        </AspirantApiContext.Provider>
    )

}