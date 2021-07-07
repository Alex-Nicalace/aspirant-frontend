import React from "react";
import {AspirantApiContext} from "./aspirant-api-context";
import AspirantApiService from "../../../api/aspirant-api-service";
import {useDispatch, useSelector} from "react-redux";
import {deleteDictDoc, fetchDictDoc, insertDictDoc, updateDictDoc} from "../../../actions/dict-doc-actions";
import {getDictDocHardSelector, getDictDocSelector} from "../../../selectors/dict-doc-selectors";
import {getIsAuth} from "../../../selectors/user-selector";

export const AspirantApi = ({children}) => {
    const aspirantApiService = new AspirantApiService();

    const dispatch = useDispatch();
    const isAuth = useSelector(state => getIsAuth(state));

    const dictDoc = useSelector(state => getDictDocSelector(state));

    const fetchDictDocApi = async () => {
        await fetchDictDoc(aspirantApiService.dictDocAPI , dispatch);
    }
    const insertDictDocApi = async (rec) => {
        await insertDictDoc(rec)(aspirantApiService.dictDocAPI , dispatch);
    }
    const deleteDictDocApi = async (id) => {
        await deleteDictDoc(id)(aspirantApiService.dictDocAPI , dispatch);
    }
    const updateDictDocApi = async (rec) => {
        await updateDictDoc(rec)(aspirantApiService.dictDocAPI , dispatch);
    }

    return (
        <AspirantApiContext.Provider value={{
            dictDoc,
            fetchDictDocApi,
            isAuth,
            insertDictDocApi,
            deleteDictDocApi,
            updateDictDocApi,
        }}>
            {children}
        </AspirantApiContext.Provider>
    )

}