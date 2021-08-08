import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormWrapField from "../form-wrap-field";
import {DropdownList, Input, InputDate} from "../controls";

const schema = yup.object().shape({
    firstname: yup
        .string()
        .matches(/^([^0-9]*)$/, "имя не может содержать цифры")
        .required("имя обязательное поле"),
    lastname: yup
        .string()
        .matches(/^([^0-9]*)$/, "фамилия не может содержать цифры")
        .required("фамилия обязательное поле"),
    middleName: yup
        .string()
        .matches(/^([^0-9]*)$/, "отчество не может содержать цифры"),
    birthdate: yup
        .date()
        .nullable()
        .default(null)
        .typeError('некорректная дата')
        .required('дата обязательное поле'),
    sex: yup
        .boolean()
        .required("пол обязательное поле"),
});

const renderSex = [
    <MenuItem value=''><em>пусто</em></MenuItem>,
    <MenuItem value={true}>мужской</MenuItem>,
    <MenuItem value={false}>женский</MenuItem>
]

const FacesEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const {
        faces: {
            insertRec,
            updateRec,
            dataset,
        }
    } = useAspirantApiContext();

    return (
        <FormWrapField
            dataset={dataset}
            closeEdit={closeEdit}
            currentRec={currentRec}
            handleSubmit={handleSubmit}
            insertRec={insertRec}
            modeEdit={modeEdit}
            setValue={setValue}
            updateRec={updateRec}
        >
            <Input
                control={control}
                name='lastname'
                rules={{required: true}}
                defaultValue=''
                label="фамилия"
                required
                type='search'
                error={!!errors.lastname}
                helperText={errors?.lastname?.message}
                fullWidth
            />

            <Input
                control={control}
                name='firstname'
                rules={{required: true}}
                defaultValue=''
                label="имя"
                required
                type='search'
                error={!!errors.firstname}
                helperText={errors?.firstname?.message}
                fullWidth
            />
            <Input
                control={control}
                name='middleName'
                defaultValue=''
                label="отчество"
                type='search'
                error={!!errors.middleName}
                helperText={errors?.middleName?.message}
                fullWidth
            />
            <InputDate
                control={control}
                name='birthdate'
                rules={{required: true}}
                defaultValue={null}
                label='дата рождения'
                required
                error={!!errors.birthdate}
                helperText={errors?.birthdate?.message}
            />
            <DropdownList
                style={{minWidth: "200px"}}
                control={control}
                name='sex'
                rules={{required: true}}
                defaultValue=''
                label='пол'
                required
                renderItem={renderSex}
                error={!!errors.tblDictEducationLevelId}
                helperText={errors?.tblDictEducationLevelId?.message}
                fullWidth
            />

        </FormWrapField>
    );
};

export default FacesEdit;