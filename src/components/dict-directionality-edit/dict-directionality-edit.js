import React, {useEffect} from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FormWrapField from "../form-wrap-field";
import {DropdownList, Input} from "../controls";
import MenuItem from "@material-ui/core/MenuItem";
import DictEnterpriseAsTree from "../dict-enterprise-as-tree";

const schema = yup.object().shape({
    tblDictNameDirectionId: yup
        .number()
        .nullable()
        .required("'наименование направления' обязательное поле"),
    DirectionalityOrSpecialty: yup
        .string()
        .required("'наименование направленности' обязательное поле"),
    tblDictEnterpriseId: yup
        .number()
        .nullable()
        .required("'кафедра' обязательное поле"),

});

const DictDirectionalityEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {control, handleSubmit, formState: {errors}, setValue, watch} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {
        dictDirectionalityAndSpecialty: {
            insertRec,
            updateRec,
            datasetDirectionality,
        },
        dictDirection
    } = useAspirantApiContext();

    const currentRecInit = watch('tblDictEnterpriseId');

    useEffect(() => {
        dictDirection.fetch();
    }, [])

    const renderDictDirection = dictDirection.dataset.map((i) => <MenuItem key={i.id} value={i.id}>{i.nameDirection} </MenuItem>);
    renderDictDirection.unshift(<MenuItem key='dictCountry-key' value={null}> <em>не выбрано</em> </MenuItem>);

    const changeEnterpriseIdHandle = (id) => {
        setValue('tblDictEnterpriseId', id)
    }

    return (
        <FormWrapField
            dataset={datasetDirectionality}
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
                name='tblDictNameDirectionId'
                rules={{required: true}}
                defaultValue={null}
                label='направление'
                required
                renderItem={renderDictDirection}
                error={!!errors.tblDictNameDirectionId}
                helperText={errors?.tblDictNameDirectionId?.message}
                fullWidth
            />
            <Input
                id='directionality-id'
                control={control}
                name='DirectionalityOrSpecialty'
                rules={{required: true}}
                defaultValue=''
                label="наименование направленности"
                required
                type='search'
                error={!!errors.DirectionalityOrSpecialty}
                helperText={errors?.DirectionalityOrSpecialty?.message}
                fullWidth
            />
            <DictEnterpriseAsTree
                changeEnterpriseId={changeEnterpriseIdHandle}
                currentRecInit={currentRecInit}
            />
        </FormWrapField>
    );
}

export default DictDirectionalityEdit;