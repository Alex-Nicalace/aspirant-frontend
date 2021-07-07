import {
    FETCH_USER_ACTION,
    REQUEST_USER_ACTION,
    FAILURE_USER_ACTION,
} from "../utils/consts";

const userReducer = (state, action) => {
    if (state === undefined) {
        return {
            data: null,
            isLoading: false,
            error: null,
            isAuth: true,
        }
    };

    switch (action.type) {
        case FETCH_USER_ACTION:
            return {
                data: action.payload.data,
                isLoading: false,
                error: null,
                isAuth: true,
            }
        case REQUEST_USER_ACTION:
            return {
                data: null,
                isLoading: true,
                error: null,
                isAuth: false,
            }
        case FAILURE_USER_ACTION:
            return {
                data: null,
                isLoading: false,
                error: action.payload,
                isAuth: false,
            }
        default:
            return state

    }
};

export default userReducer;