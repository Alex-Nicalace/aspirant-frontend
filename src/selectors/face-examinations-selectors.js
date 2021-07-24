import {createSelector} from 'reselect';

export const getFaceExaminationsSelector = (state) => {
    return state.faceExaminations;
}

export const  getDatasetFaceExaminationsSelector = createSelector([getFaceExaminationsSelector], (state) => {
    return state.dataset;
});

export const getIsLoadingFaceExaminationsSelector = createSelector([getFaceExaminationsSelector], (state) => {
    return state.isLoading;
});

export const getErrorFaceExaminationsSelector = createSelector([getFaceExaminationsSelector], (state) => {
    return state.error;
});

export const getDatasetDependsOnIdFaceExaminationsSelector = createSelector([getFaceExaminationsSelector], (state) => {
    return state.datasetDependsOnId;
});

