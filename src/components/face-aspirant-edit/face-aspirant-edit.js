import React, {useEffect} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FormWrapField from "../form-wrap-field";
import {CheckboxWithLabel, ChoiseAcademicAdvisorFromTable, DropdownList, Input} from "../controls";

const schema = yup.object().shape({
    tblFaceId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("лицо обязательное поле"),
    isRecommendation: yup
        .boolean()
        .nullable(),
    isProtocol: yup
        .boolean()
        .nullable(),
    isAgree: yup
        .boolean(),
    isHeadDepartment: yup
        .boolean(),
    tblDictSubjectId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("предмет обязательное поле"),
    tblDictEducationFormId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("форма обучения обязательное поле"),
    tblDictDirectionalityAndSpecialtyId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("направленность/спец. обязательное поле"),
    dissertationTheme: yup
        .string()
        .required("тема диссертации обязательное поле"),
    tblAcademicAdvisorId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("научный руководитель обязательное поле"),

});

const FaceAspirantEdit = ({closeEdit, modeEdit, currentRec, valuesToState}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        defaultValues: {tblAcademicAdvisorId: null},
        resolver: yupResolver(schema),
    });

    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {
        faceAspirant: {
            insertRec,
            updateRec,
            datasetModify,
            faceId
        },
        dictSubject,
        dictEducationForm,
    } = useAspirantApiContext();

    useEffect(() => {
        dictSubject.fetch();
        dictEducationForm.fetch();
    }, [])

    const valuesToState1 = {tblFaceId: faceId, ...valuesToState};

    const renderSubject = dictSubject.dataset.map((i) => <MenuItem key={i.id}
                                                                   value={i.id}>{i.subject} </MenuItem>);
    renderSubject.unshift(<MenuItem key='renderSubject-key' value=''> <em>не выбрано</em> </MenuItem>);

    const renderDictEducationForm = dictEducationForm.dataset.map((i) => <MenuItem key={i.id}
                                                                                   value={i.id}>{i.educationForm} </MenuItem>);
    renderDictEducationForm.unshift(<MenuItem key='renderDictEducationForm-key' value=''> <em>не выбрано</em>
    </MenuItem>);

    return (
        <FormWrapField
            dataset={datasetModify}
            closeEdit={closeEdit}
            currentRec={currentRec}
            handleSubmit={handleSubmit}
            insertRec={insertRec}
            modeEdit={modeEdit}
            setValue={setValue}
            updateRec={updateRec}
            valuesToState={valuesToState1}
        >
            <CheckboxWithLabel
                control={control}
                name='isRecommendation'
                defaultValue={false}
                label='реком. сов. фак'
                //fullWidth
                error={!!errors.isRecommendation}
                helperText={errors?.isRecommendation?.message}
            />
            <CheckboxWithLabel
                control={control}
                name='isProtocol'
                defaultValue={false}
                label='выписка из протокола'
                error={!!errors.isProtocol}
                helperText={errors?.isProtocol?.message}
            />
            <CheckboxWithLabel
                control={control}
                name='isAgree'
                defaultValue={false}
                label='согласие на науч. рук.'
                error={!!errors.isAgree}
                helperText={errors?.isAgree?.message}
            />
            <CheckboxWithLabel
                control={control}
                name='isHeadDepartment'
                defaultValue={false}
                label='согласование зав. каф.'
                error={!!errors.isHeadDepartment}
                helperText={errors?.isHeadDepartment?.message}
            />
            <DropdownList
                style={{minWidth: "200px"}}
                control={control}
                name='tblDictSubjectId'
                rules={{required: true}}
                defaultValue=''
                label='предмет'
                required
                renderItem={renderSubject}
                error={!!errors.tblDictSubjectId}
                helperText={errors?.tblDictSubjectId?.message}
                fullWidth
            />
            <DropdownList
                style={{minWidth: "200px"}}
                control={control}
                name='tblDictEducationFormId'
                rules={{required: true}}
                defaultValue=''
                label='форма обучения'
                required
                renderItem={renderDictEducationForm}
                error={!!errors.tblDictEducationFormId}
                helperText={errors?.tblDictEducationFormId?.message}
                fullWidth
            />
            <Input
                control={control}
                name='dissertationTheme'
                rules={{required: true}}
                defaultValue=''
                label="тема диссертации"
                required
                type='search'
                error={!!errors.dissertationTheme}
                helperText={errors?.dissertationTheme?.message}
                fullWidth
            />

            <ChoiseAcademicAdvisorFromTable
                control={control}
                name='tblAcademicAdvisorId'
                rules={{required: true}}
                defaultValue=''
                label='выберите научного руководителя'
                error={!!errors.tblAcademicAdvisorId}
                helperText={errors?.tblAcademicAdvisorId?.message}
            />

            {/*<InputDate*/}
            {/*    control={control}*/}
            {/*    name='date'*/}
            {/*    rules={{required: true}}*/}
            {/*    defaultValue={null}*/}
            {/*    label='дата'*/}
            {/*    required*/}
            {/*    error={!!errors.date}*/}
            {/*    helperText={errors?.date?.message}*/}
            {/*/>*/}


        </FormWrapField>
    );
}

export default FaceAspirantEdit;