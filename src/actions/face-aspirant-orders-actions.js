import {
    FETCH_ASPIRANT_ORDERS_ACTION,
    REQUEST_ASPIRANT_ORDERS_ACTION,
    FAILURE_ASPIRANT_ORDERS_ACTION,
    INS_ASPIRANT_ORDERS_ACTION,
    DEL_ASPIRANT_ORDERS_ACTION,
    UPD_ASPIRANT_ORDERS_ACTION,
    SUCCESS,
    ERROR,
    WARNING,
} from "../utils/consts";
import {setDisappearingMessage} from "./messages-actions";
import {refreshRecordFaceAspirant} from "./face-aspirant-actions";
//import {refreshRecordFaces} from "./faces-list-actions";

export const aspirantOrdersLoaded = (data) => {
    return {
        type: FETCH_ASPIRANT_ORDERS_ACTION,
        payload: data,
    }
}

export const aspirantOrdersRequested = () => {
    return {
        type: REQUEST_ASPIRANT_ORDERS_ACTION,
    }
}

export const aspirantOrdersError = (error) => {
    return {
        type: FAILURE_ASPIRANT_ORDERS_ACTION,
        payload: error,
    }
}

export const aspirantOrdersInserted = (data) => {
    return {
        type: INS_ASPIRANT_ORDERS_ACTION,
        payload: data,
    }
}

export const aspirantOrdersDeleted = (id) => {
    return {
        type: DEL_ASPIRANT_ORDERS_ACTION,
        payload: id,
    }
}

export const aspirantOrdersUpdated = (data) => {
    return {
        type: UPD_ASPIRANT_ORDERS_ACTION,
        payload: data,
    }
}

export const fetchAspirantOrders = (faceAspirantId) => async (api, dispatch) => {
    dispatch(aspirantOrdersRequested());
    try {
        const response = await api.getAllOneRecFaceAspirant(faceAspirantId);
        response.datasetDependsOnId = faceAspirantId;
        dispatch(aspirantOrdersLoaded(response));
    } catch (e) {
        dispatch(aspirantOrdersError(e.response))
    }
}

export const insertAspirantOrders = (rec) => async ({aspirantOrderApi, aspirantApi}, dispatch) => {
    dispatch(aspirantOrdersRequested());
    try {
        const response = await aspirantOrderApi.post(rec);
        dispatch(aspirantOrdersInserted(response));
        dispatch(setDisappearingMessage('запись успешно добавлена', SUCCESS));
        // фамилия добавлена теперь надо обновить запись из свобной таблицы
        await refreshRecordFaceAspirant(rec.tblFaceAspirantId)(aspirantApi, dispatch);
    } catch (e) {
        dispatch(aspirantOrdersError(e.response));
        dispatch(setDisappearingMessage(`запись не добавлена... ${e.response.data.message}`, ERROR));
    }
}

export const deleteAspirantOrders = (id) => async ({aspirantOrderApi, aspirantApi}, dispatch) => {
    dispatch(aspirantOrdersRequested());
    try {
        const deleted = await aspirantOrderApi.delete(id);
        dispatch(aspirantOrdersDeleted(id));
        dispatch(setDisappearingMessage('запись удалена', WARNING));
        // обновить зависящие таблицы
        await refreshRecordFaceAspirant(deleted.data.tblFaceAspirantId)(aspirantApi, dispatch);
    } catch (e) {
        dispatch(aspirantOrdersError(e.response));
        dispatch(setDisappearingMessage(`запись не удалена... ${e.response.data.message}`, ERROR));
    }
}

export const updateAspirantOrders = (rec) => async ({aspirantOrderApi, aspirantApi}, dispatch) => {
    dispatch(aspirantOrdersRequested());
    try {
        const response = await aspirantOrderApi.put(rec);
        dispatch(aspirantOrdersUpdated(response));
        dispatch(setDisappearingMessage('запись успешно обновлена', SUCCESS));
        // обновить зависящие таблицы
        await refreshRecordFaceAspirant(rec.tblFaceAspirantId)(aspirantApi, dispatch);
    } catch (e) {
        dispatch(aspirantOrdersError(e.response));
        dispatch(setDisappearingMessage(`запись не обновлена ${e.response.data.message}`, ERROR));
    }
}
