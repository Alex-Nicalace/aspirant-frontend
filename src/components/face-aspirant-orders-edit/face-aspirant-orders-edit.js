import React from 'react';
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormWrapField from "../form-wrap-field";
import {DropdownList, Input} from "../controls";
import ChoiseOrderFromTable from "../controls/choise-order-from-table";
import MenuItem from "@material-ui/core/MenuItem";

const schema = yup.object().shape({
    // tblFaceAspirantId: yup
    //     .number()
    //     .transform(value => (isNaN(value) ? undefined : value))
    //     .nullable()
    //     .required("не указана запись из таблицы Аспирант"),
    tblOrderId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("приказ обязательное поле"),
    note: yup
        .string(),
    typeRel: yup
        .string()
        .required("приказ обязательное поле"),
});

const FaceAspirantOrdersEdit = ({closeEdit, modeEdit, currentRec, valuesToState,
                                insertRecProp, whatRel}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        defaultValues: {tblOrderId: null, note: ''},
        resolver: yupResolver(schema),
    });
    const {
        faceAspirantOrders: {
            insertRec,
            updateRec,
            dataset,
            faceAspirantId
        }
    } = useAspirantApiContext();

    setValue('tblFaceAspirantId', valuesToState?.tblFaceAspirantId ?? faceAspirantId);
    // console.log('FaceAspirantOrdersEdit');
    //console.log(insertRecProp);

    const typeRel = [
        <MenuItem disabled={0 !== whatRel} key='in' value='in'>зачислен</MenuItem>,
        <MenuItem disabled={1 !== whatRel} key='out' value='out'>отчислен</MenuItem>,
        <MenuItem disabled={1 !== whatRel} key='reIn' value='reIn'>переведен</MenuItem>,
    ]

    return (
        <FormWrapField
            dataset={dataset}
            closeEdit={closeEdit}
            currentRec={currentRec}
            handleSubmit={handleSubmit}
            insertRec={insertRecProp || insertRec}
            modeEdit={modeEdit}
            setValue={setValue}
            updateRec={updateRec}
            valuesToState={valuesToState}
        >
            <DropdownList
                style={{minWidth: "200px"}}
                control={control}
                name='typeRel'
                rules={{required: true}}
                defaultValue=''
                label='о чем приказ'
                required
                renderItem={typeRel}
                error={!!errors.typeRel}
                helperText={errors?.typeRel?.message}
                fullWidth
            />
            <ChoiseOrderFromTable
                control={control}
                name='tblOrderId'
                label='выберите приказ'
                defaultValue=''
                error={!!errors.tblOrderId}
                helperText={errors?.tblOrderId?.message}
            />

            <Input
                control={control}
                name='note'
                //rules={{required: true}}
                defaultValue=''
                label="примечание"
                //required
                type='search'
                error={!!errors.firstname}
                helperText={errors?.firstname?.message}
                fullWidth
            />

        </FormWrapField>
    );
};

export default FaceAspirantOrdersEdit;