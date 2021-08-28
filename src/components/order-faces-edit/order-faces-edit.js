import React from 'react';
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormWrapField from "../form-wrap-field";
import {DropdownList, Input} from "../controls";
import ChoiseFaceFromTable from "../controls/choise-face-from-table";
import MenuItem from "@material-ui/core/MenuItem";

const schema = yup.object().shape({
    tblFaceId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable()
        .required("лицо обязательное поле"),
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

const OrderFacesEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        //defaultValues: { tblFaceId: null, note: '' },
        resolver: yupResolver(schema),
    });
    const {
        orderFaces: {
            insertRec,
            updateRec,
            datasetModify,
            orderId
        }
    } = useAspirantApiContext();

    //const valuesToState = {tblOrderId: orderId};
    setValue('tblOrderId', orderId);

    const typeRel = [
        <MenuItem key='in' value='in'>зачислен</MenuItem>,
        <MenuItem key='out' value='out'>отчислен</MenuItem>,
        <MenuItem key='reIn' value='reIn'>переведен</MenuItem>,
    ]

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
            //valuesToState={valuesToState}
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
            <ChoiseFaceFromTable
                control={control}
                name='tblFaceId'
                label='выберите лицо'
                defaultValue=''
                error={!!errors.tblFaceId}
                helperText={errors?.tblFaceId?.message}
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

export default OrderFacesEdit;