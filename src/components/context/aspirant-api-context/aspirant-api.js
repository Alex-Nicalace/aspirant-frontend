import React from "react";
import {AspirantApiContext} from "./aspirant-api-context";
import AspirantApiService from "../../../api/aspirant-api-service";
import {useDispatch, useSelector} from "react-redux";
import {deleteDictDoc, fetchDictDoc, insertDictDoc, updateDictDoc} from "../../../actions/dict-doc-actions";
import {
    getDatasetDictDocSelector,
    getDictDocSelector, getErrorDictDocSelector,
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



    // const fetchDictDocApi = async () => {
    //     await fetchDictDoc(aspirantApiService.dictDocAPI , dispatch);
    // }
    // const insertDictDocApi = async (rec) => {
    //     await insertDictDoc(rec)(aspirantApiService.dictDocAPI , dispatch);
    // }
    // const deleteDictDocApi = async (id) => {
    //     await deleteDictDoc(id)(aspirantApiService.dictDocAPI , dispatch);
    // }
    // const updateDictDocApi = async (rec) => {
    //     await updateDictDoc(rec)(aspirantApiService.dictDocAPI , dispatch);
    // }

    // const pushMessage = (message, typeMessage) => {
    //     dispatch(setMessage(message, typeMessage));
    // }
    // const destroyMessage = () => {
    //     dispatch(clearMessage());
    // }
    // const pushDisappearingMessage = (message, typeMessage, timeout) => {
    //     setDisappearingMessage(message, typeMessage, timeout)(dispatch)
    // }

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
            isAuth,
        }}>
            {children}
        </AspirantApiContext.Provider>
    )

}