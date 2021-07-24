import {createSelector} from 'reselect';

export const getFaceEntranceExaminSelector = (state) => {
    return state.faceEntranceExamin;
}

export const getDatasetFaceEntranceExaminSelector = createSelector([getFaceEntranceExaminSelector], (state) => {
    return state.dataset;
});

export const getIsLoadingFaceEntranceExaminSelector = createSelector([getFaceEntranceExaminSelector], (state) => {
    return state.isLoading;
});

export const getErrorFaceEntranceExaminSelector = createSelector([getFaceEntranceExaminSelector], (state) => {
    return state.error;
});

export const getDatasetDependsOnIdFaceEntranceExaminSelector = createSelector([getFaceEntranceExaminSelector], (state) => {
    return state.datasetDependsOnId;
});

