import {createSelector} from 'reselect';

export const getFacesSelector = (state) => {
    return state.faces;
}

export const  getDatasetFacesSelector = createSelector([getFacesSelector], (state) => {
    return state.dataset;
});

export const getIsLoadingFacesSelector = createSelector([getFacesSelector], (state) => {
    return state.isLoading;
});

export const getErrorFacesSelector = createSelector([getFacesSelector], (state) => {
    return state.error;
});

