import {createSelector} from 'reselect';

export const getDictDocSelector = (state) => {
    return state.dictDoc;
}

export const getDictDocDatasetSelector = (state) => {
    return getDictDocSelector(state).dataset //getDictDocSelector(state).dataset;
}

export const getDictDocHardSelector = createSelector([getDictDocDatasetSelector], (docs) => {
    return docs.filter(i => i.id === 1);
});
