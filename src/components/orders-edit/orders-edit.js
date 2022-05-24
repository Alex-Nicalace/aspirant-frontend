import React, {useEffect, useState} from 'react';
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormWrapField from "../form-wrap-field";
import {Input, InputDate} from "../controls/react-hook-form";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const schema = yup.object().shape({
    numOrder: yup
        .string()
        .required('дата обязательное поле'),
    text: yup
        .string(),
    dateOrder: yup
        .date()
        .nullable()
        .default(null)
        .typeError('некорректная дата')
        .required('дата обязательное поле'),
    file: yup
        .mixed()
        //.required('обязательное поле')
        .nullable(),
        //.test('fileType', 'Только файлы: .pdf', value => SUPPORTED_FORMATS.includes(value.type)),
    isDeleteFile: yup
        .boolean()
        .nullable(),
});

const useStyles = makeStyles(() => ({
    btnSelect: {
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
}));

const OrdersEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {control, handleSubmit, formState: {errors}, setValue, watch} = useForm({
        mode: "onBlur",
        defaultValues: {isDeleteFile: false},
        resolver: yupResolver(schema),
    });
    const {
        orders: {
            insertRec,
            updateRec,
            dataset,
        }
    } = useAspirantApiContext();
    const [isExistsFile, setIsExistsFile] = useState(false);
    const classes = useStyles();
    const pathFile = watch('pathFile');
    const isDeleteFile = watch('isDeleteFile');

    useEffect(() => {
        if (modeEdit === 'update')
            setIsExistsFile(Boolean(dataset.find(({id}) => +id === +currentRec).pathFile))
    }, [dataset, currentRec, modeEdit])

    const onDeleteFileHandle = () => {
        setValue('isDeleteFile', true);
    }

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
                name='numOrder'
                rules={{required: true}}
                defaultValue=''
                label="№ приказа"
                required
                type='search'
                error={!!errors.numOrder}
                helperText={errors?.numOrder?.message}
                fullWidth
                autoFocus
            />
            <InputDate
                control={control}
                name='dateOrder'
                rules={{required: true}}
                defaultValue={null}
                label='дата приказа'
                required
                error={!!errors.dateOrder}
                helperText={errors?.dateOrder?.message}
            />
            <Input
                control={control}
                name='text'
                //rules={{required: true}}
                defaultValue=''
                label="содержание приказа"
                //required
                type='search'
                error={!!errors.text}
                helperText={errors?.text?.message}
                fullWidth
                multiline
                minRows={4}
                maxRows={30}
            />
            {!isExistsFile || isDeleteFile
                ? <Input
                    control={control}
                    name='file'
                    rules={{required: true}}
                    defaultValue=''
                    label="выберите файл"
                    required
                    type='file'
                    error={!!errors.file}
                    helperText={errors?.file?.message}
                    fullWidth
                />
                : <Grid container alignContent='flex-end'>
                    <Grid item lg={9}>
                        <TextField
                            value={pathFile}
                            label='прикрепленный файл'
                            fullWidth
                        />
                    </Grid>
                    <Grid item lg={3} className={classes.btnSelect}>
                        <Button
                            variant='outlined'
                            size='small'
                            onClick={onDeleteFileHandle}
                        >Удалить файл
                        </Button>
                    </Grid>
                </Grid>

            }
        </FormWrapField>
    );
};

export default OrdersEdit;