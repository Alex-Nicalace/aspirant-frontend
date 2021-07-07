import {
    FETCH_USER_ACTION,
    REQUEST_USER_ACTION,
    FAILURE_USER_ACTION,
} from "../utils/consts";

export const userLoaded = (data) => {
    return {
        type: FETCH_USER_ACTION,
        payload: data,
    }
}

export const userRequested = () => {
    return {
        type: REQUEST_USER_ACTION,
    }
}

export const userError = (error) => {
    return {
        type: FAILURE_USER_ACTION,
        payload: error,
    }
}

export const fetchUser = (api, dispatch) => {
    dispatch(userRequested());
    api.checkUser()
        .then(response => {
            dispatch(userLoaded(response));
        })
        .catch(error => {
            dispatch(userError(error.response.data))

        })
}