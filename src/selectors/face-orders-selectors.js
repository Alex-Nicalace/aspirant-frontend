import {createSelector} from 'reselect';

export const getFaceOrdersSelector = (state) => {
    return state.faceOrders;
}

export const  getDatasetFaceOrdersSelector = createSelector([getFaceOrdersSelector], (state) => {
    return state.dataset;
});

export const getIsLoadingFaceOrdersSelector = createSelector([getFaceOrdersSelector], (state) => {
    return state.isLoading;
});

export const getErrorFaceOrdersSelector = createSelector([getFaceOrdersSelector], (state) => {
    return state.error;
});

export const getDatasetDependsOnIdFaceOrdersSelector = createSelector([getFaceOrdersSelector], (state) => {
    return state.datasetDependsOnId;
});

