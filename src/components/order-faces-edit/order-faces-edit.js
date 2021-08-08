import React from 'react';
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormWrapField from "../form-wrap-field";
import {Input} from "../controls";
import ChoiseFaceFromTable from "../controls/choise-face-from-table";

const schema = yup.object().shape({
    tblFaceId: yup
        .number()
        .nullable()
        .required("лицо обязательное поле"),
    note: yup
        .string()
});

const OrderFacesEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        defaultValues: { tblFaceId: null, note: '' },
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

    const valuesToState = {tblOrderId: orderId};

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
            valuesToState={valuesToState}
        >
            <ChoiseFaceFromTable
                control={control}
                name='tblFaceId'
                label='выберите лицо'
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