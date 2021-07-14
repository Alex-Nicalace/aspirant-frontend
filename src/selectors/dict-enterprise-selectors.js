import {createSelector} from 'reselect';

export const getDictEnterpriseSelector = (state) => {
    return state.dictEnterprise;
}

export const getDatasetDictEnterpriseSelector = createSelector([getDictEnterpriseSelector], (state) => {
    return state.dataset;
});

export const getDatasetAsTreeDictEnterpriseSelector = createSelector([getDatasetDictEnterpriseSelector], (dataset) => {

    const getBranch = (id) => {
        const res = dataset.filter(rec => rec.parentId === id);

        let m = [];
        for (let i = 0; i <= res.length - 1; i++) {
            const children = getBranch(res[i].id)
            m.push({...res[i], children})
        }
        return m
    }

    return getBranch(null);
});

export const getIsLoadingDictEnterpriseSelector = createSelector([getDictEnterpriseSelector], (state) => {
    return state.isLoading;
});

export const getErrorDictEnterpriseSelector = createSelector([getDictEnterpriseSelector], (state) => {
    return state.error;
});

