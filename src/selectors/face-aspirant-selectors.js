import {createSelector} from 'reselect';

export const getFaceAspirantSelector = (state) => {
    return state.faceAspirant;
}

export const getDatasetFaceAspirantSelector = createSelector([getFaceAspirantSelector], (state) => {
    return state.dataset;
});

export const getDatasetToFlatFaceAspirantSelector = createSelector([getDatasetFaceAspirantSelector], (dataset) => {
    return dataset.map(i => ({
        id: i.id,
        tblFaceId: i.tblFaceId,
        isRecommendation: i.isRecommendation,
        isProtocol: i.isProtocol,
        isAgree: i.isAgree,
        isHeadDepartment: i.isHeadDepartment,
        tblDictSubjectId: i.tblDictSubjectId,
        tblDictEducationFormId: i.tblDictEducationFormId,
        tblDictDirectionalityAndSpecialtyId: i.tblDictDirectionalityAndSpecialtyId,
        dissertationTheme: i.dissertationTheme,
        tblAcademicAdvisorId: i.tblAcademicAdvisorId,
        educationForm: i.tblDictEducationForm.educationForm,
        subject: i.tblDictSubject.subject,
        DirectionalityOrSpecialty: i.tblDictDirectionalityAndSpecialty.DirectionalityOrSpecialty,
        nameDirection: i.tblDictDirectionalityAndSpecialty?.tblDictNameDirection?.nameDirection,
        subDiv: i.tblDictDirectionalityAndSpecialty.tblDictEnterprise.name,
        academicAdvisor: `${i.tblAcademicAdvisor.tblFace.tblFaceNames[0].lastname} ${i.tblAcademicAdvisor.tblFace.tblFaceNames[0].firstname} ${i.tblAcademicAdvisor.tblFace.tblFaceNames[0].middleName}, ${new Date(i.tblAcademicAdvisor.tblFace.birthdate).toLocaleDateString()} г.р.`
    }))
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

