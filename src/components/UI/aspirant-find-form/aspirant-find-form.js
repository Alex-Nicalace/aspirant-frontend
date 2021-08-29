import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBirthdateFioSex from "../input-birthdate-fio-sex";
import {DropdownList, Input} from "../../controls";
import MenuItem from "@material-ui/core/MenuItem";
import InputParsedDate from "../input-parsed-date";
import FormWrapField from "../../form-wrap-field";
import {useAspirantApiContext} from "../../context/aspirant-api-context/aspirant-api-context";

const schema = yup.object().shape({
    dd: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .min(1, 'ошибка')
        .max(31, 'ошибка')
        .nullable(),
    mm: yup
        .number()
        .min(1, 'ошибка')
        .max(12, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    yyyy: yup
        .number()
        .min(1900, 'ошибка')
        .max(2099, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    sex: yup
        .boolean()
        .transform(value => (value === '' ? undefined : value))
        .nullable(),
    firstname: yup
        .string()
        .nullable()
        .matches(/^([^0-9]*)$/, "не может содержать цифры"),
    lastname: yup
        .string()
        .nullable()
        .matches(/^([^0-9]*)$/, "не может содержать цифры"),
    middleName: yup
        .string()
        .nullable()
        .matches(/^([^0-9]*)$/, "не может содержать цифры"),
    isRecommendation: yup
        .boolean()
        .transform(value => (value === '' ? undefined : value))
        .nullable(),
    isProtocol: yup
        .boolean()
        .transform(value => (value === '' ? undefined : value))
        .nullable(),
    isAgree: yup
        .boolean()
        .transform(value => (value === '' ? undefined : value))
        .nullable(),
    isHeadDepartment: yup
        .boolean()
        .transform(value => (value === '' ? undefined : value))
        .nullable(),
    // зачислен
    ddIn: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .min(1, 'ошибка')
        .max(31, 'ошибка')
        .nullable(),
    mmIn: yup
        .number()
        .min(1, 'ошибка')
        .max(12, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    yyyyIn: yup
        .number()
        .min(1900, 'ошибка')
        .max(2099, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    // исключен
    ddOut: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .min(1, 'ошибка')
        .max(31, 'ошибка')
        .nullable(),
    mmOut: yup
        .number()
        .min(1, 'ошибка')
        .max(12, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    yyyyOut: yup
        .number()
        .min(1900, 'ошибка')
        .max(2099, 'ошибка')
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    dissertationTheme: yup
        .string(),
    tblDictEducationFormId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),
    tblDictNameDirectionId: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .nullable(),

});

const useStyles = makeStyles(theme => ({
    button: {
        //alignSelf: 'flex-end',
        marginTop: `${theme.spacing(2)}px`,
    }
}))

const AspirantFindForm = ({fetch}) => {
    const classes = useStyles();
    const {control, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const {dictEducationForm, dictDirection} = useAspirantApiContext();

    useEffect(() => {
        dictEducationForm.fetch();
        dictDirection.fetch();
    }, [])

    const submitHandle = (data, e = null) => {
        e && e.preventDefault();
        fetch(data);
    }

    const renderBoolean = [
        <MenuItem value=''><em>пусто</em></MenuItem>,
        <MenuItem value={true}>да</MenuItem>,
        <MenuItem value={false}>нет</MenuItem>
    ]

    const renderDictEducationForm = dictEducationForm.dataset.map((i) => <MenuItem key={i.id}
                                                                                   value={i.id}>{i.educationForm} </MenuItem>);
    renderDictEducationForm.unshift(<MenuItem key='renderDictEducationForm-key' value=''> <em>не выбрано</em>
    </MenuItem>);

    const renderDictNameDirection = dictDirection.dataset.map((i) => <MenuItem key={i.id}
                                                                                   value={i.id}>{i.nameDirection} </MenuItem>);
    renderDictNameDirection.unshift(<MenuItem key='renderDictEducationForm-key' value=''> <em>не выбрано</em>
    </MenuItem>);

    return (
        <form /*onSubmit={handleSubmit(submitHandle)}*/>
            <Grid
                container
                spacing={2}
            >
                <Grid item>
                    <InputBirthdateFioSex
                        control={control}
                        errors={errors}
                        lastname='lastname'
                        firstname='firstname'
                        middleName='middleName'
                        dd='dd'
                        mm='mm'
                        yyyy='yyyy'
                        sex='sex'
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='isRecommendation'
                        //rules={{required: true}}
                        defaultValue=''
                        label='реком. сов. фак.'
                        //required
                        renderItem={renderBoolean}
                        error={!!errors.isRecommendation}
                        helperText={errors?.isRecommendation?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='isProtocol'
                        //rules={{required: true}}
                        defaultValue=''
                        label='вып. из прот.'
                        //required
                        renderItem={renderBoolean}
                        error={!!errors.isProtocol}
                        helperText={errors?.isProtocol?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='isAgree'
                        //rules={{required: true}}
                        defaultValue=''
                        label='согл. на науч. рук.'
                        //required
                        renderItem={renderBoolean}
                        error={!!errors.isAgree}
                        helperText={errors?.isAgree?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='isHeadDepartment'
                        //rules={{required: true}}
                        defaultValue=''
                        label='согл. зав. каф.'
                        //required
                        renderItem={renderBoolean}
                        error={!!errors.isHeadDepartment}
                        helperText={errors?.isHeadDepartment?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <InputParsedDate
                        control={control}
                        dd='ddIn'
                        mm='mmIn'
                        yyyy='yyyyIn'
                        errors={errors}
                        label='зачислен:'
                    />
                </Grid>
                <Grid item>
                    <InputParsedDate
                        control={control}
                        dd='ddOut'
                        mm='mmOut'
                        yyyy='yyyyOut'
                        errors={errors}
                        label='исключен:'
                    />
                </Grid>
                <Grid item>
                    <Input
                        control={control}
                        name='dissertationTheme'
                        //rules={{required: true}}
                        defaultValue=''
                        label="тема диссертации"
                        //required
                        type='search'
                        error={!!errors.dissertationTheme}
                        helperText={errors?.dissertationTheme?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='tblDictEducationFormId'
                        defaultValue=''
                        label='форма обучения'
                        renderItem={renderDictEducationForm}
                        error={!!errors.tblDictEducationFormId}
                        helperText={errors?.tblDictEducationFormId?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item>
                    <DropdownList
                        style={{minWidth: "200px"}}
                        control={control}
                        name='tblDictNameDirectionId'
                        defaultValue=''
                        label='направление'
                        renderItem={renderDictNameDirection}
                        error={!!errors.tblDictNameDirectionId}
                        helperText={errors?.tblDictNameDirectionId?.message}
                        //fullWidth
                    />
                </Grid>
                <Grid item className={classes.button}>
                    <Button
                        //type='submit'
                        // закрывает окно в случае когда на форме надо найти лицо => закоментил
                        type='button'
                        onClick={handleSubmit(submitHandle)}
                        variant='outlined'
                        color='primary'>
                        найти
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AspirantFindForm;