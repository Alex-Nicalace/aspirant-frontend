import {
    FETCH_DICT_CONTACT_TYPE_ACTION,
    REQUEST_DICT_CONTACT_TYPE_ACTION,
    FAILURE_DICT_CONTACT_TYPE_ACTION, INS_DICT_CONTACT_TYPE_ACTION, DEL_DICT_CONTACT_TYPE_ACTION, UPD_DICT_CONTACT_TYPE_ACTION,
} from "../utils/consts";

const dictContactTypeReducer = (state, action) => {
    if (state === undefined) {
        return {
            dataset: [],
            isLoading: false,
            error: null,
        }
    }

    switch (action.type) {
        case FETCH_DICT_CONTACT_TYPE_ACTION:
            return {
                dataset: action.payload.data,
                isLoading: false,
                error: null,
            }
        case REQUEST_DICT_CONTACT_TYPE_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case FAILURE_DICT_CONTACT_TYPE_ACTION:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        case INS_DICT_CONTACT_TYPE_ACTION:
            return {
                dataset: [...state.dataset, action.payload.data],
                isLoading: false,
                error: null,
            }
        case DEL_DICT_CONTACT_TYPE_ACTION:
            return {
                dataset: state.dataset.filter(item => item.id !== action.payload),
                isLoading: false,
                error: null,
            }
        case UPD_DICT_CONTACT_TYPE_ACTION:
            return {
                dataset: state.dataset.map(i => {
                    if (i.id === action.payload.data.id) {
                        return action.payload.data
                    }
                    return i
                }),
                isLoading: false,
                error: null,
            }
        default:
            return state

    }
};

export default dictContactTypeReducer;