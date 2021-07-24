import {createSelector} from 'reselect';

export const getFaceAspirantSelector = (state) => {
    return state.faceAspirant;
}

export const  getDatasetFaceAspirantSelector = createSelector([getFaceAspirantSelector], (state) => {
    return state.dataset;
});

export const getIsLoadingFaceAspirantSelector = createSelector([getFaceAspirantSelector], (state) => {
    return state.isLoading;
});

export const getErrorFaceAspirantSelector = createSelector([getFaceAspirantSelector], (state) => {
    return state.error;
});

export const getDatasetDependsOnIdFaceAspirantSelector = createSelector([getFaceAspirantSelector], (state) => {
    return state.datasetDependsOnId;
});

