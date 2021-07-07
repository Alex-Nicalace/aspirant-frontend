import {
    FETCH_DICT_DOC_ACTION,
    REQUEST_DICT_DOC_ACTION,
    FAILURE_DICT_DOC_ACTION, INS_DICT_DOC_ACTION, DEL_DICT_DOC_ACTION, UPD_DICT_DOC_ACTION,
} from "../utils/consts";

export const dictDocLoaded = (data) => {
    return {
        type: FETCH_DICT_DOC_ACTION,
        payload: data,
    }
}

export const dictDocRequested = () => {
    return {
        type: REQUEST_DICT_DOC_ACTION,
    }
}

export const dictDocError = (error) => {
    return {
        type: FAILURE_DICT_DOC_ACTION,
        payload: error,
    }
}

export const dictDocInserted = (data) => {
    return {
        type: INS_DICT_DOC_ACTION,
        payload: data,
    }
}

export const dictDocDeleted = (id) => {
    return {
        type: DEL_DICT_DOC_ACTION,
        payload: id,
    }
}

export const dictDocUpdated = (data) => {
    return {
        type: UPD_DICT_DOC_ACTION,
        payload: data,
    }
}

export const fetchDictDoc = async (api, dispatch) => {
    dispatch(dictDocRequested());
    try{
        const response = await api.getAll();
        dispatch(dictDocLoaded(response));
    }catch (e) {
        dispatch(dictDocError(e.response))
    }
}

export const insertDictDoc = (rec) => async (api, dispatch) => {
    dispatch(dictDocRequested());
    try {
        const response = await api.post(rec);
        dispatch(dictDocInserted(response));
    } catch (e) {
        dispatch(dictDocError(e.response))
    }
}

export const deleteDictDoc = (id) => async (api, dispatch) => {
    dispatch(dictDocRequested());
    try {
        await api.delete(id);
        dispatch(dictDocDeleted(id));
    } catch (e) {
        dispatch(dictDocError(e.response))
    }
    // api.delete(id)
    //     .then(() => {
    //         dispatch(dictDocDeleted(id));
    //     })
    //     .catch(error => {
    //         dispatch(dictDocError(error.response))
    //
    //     })
}

export const updateDictDoc = (rec) => async (api, dispatch) => {
    dispatch(dictDocRequested());
    try {
        const response = await api.put(rec);
        dispatch(dictDocUpdated(response));
    } catch (e) {
        dispatch(dictDocError(e.response))
    }
    // api.put(rec)
    //     .then((response) => {
    //         dispatch(dictDocUpdated(response));
    //     })
    //     .catch(error => {
    //         dispatch(dictDocError(error.response))
    //
    //     })
}