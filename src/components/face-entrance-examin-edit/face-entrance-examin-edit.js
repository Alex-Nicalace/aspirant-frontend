import React, {useEffect} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FormWrapField from "../form-wrap-field";
import {DropdownList, Input, InputDate} from "../controls";

const schema = yup.object().shape({
    tblDictSubjectId: yup
        .number()
        .nullable()
        .required("предмет обязательное поле"),
    estimate: yup
        .number()
        .nullable()
        .min(1, 'мин. зн. 1')
        .max(5, 'макс. зн. 5')
        .required("оценка обязательное поле"),
    date: yup
        .date()
        .nullable()
        .default(null)
        .typeError('некорректная дата')
        .required("дата обязательное поле"),
});

const FaceEntranceExaminEdit = ({closeEdit, modeEdit, currentRec, valuesToState}) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {
        faceEntranceExamin: {
            insertRec,
            updateRec,
            dataset,
            faceId
        },
        dictSubject
    } = useAspirantApiContext();

    useEffect(() => {
        dictSubject.fetch();
    }, [])

    const valuesToState1 = {tblFaceId: faceId, ...valuesToState};

    const renderSubject = dictSubject.dataset.map((i) => <MenuItem key={i.id}
                                                                   value={i.id}>{i.subject} </MenuItem>);
    renderSubject.unshift(<MenuItem key='renderSubject-key' value={null}> <em>не выбрано</em> </MenuItem>);

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
            valuesToState={valuesToState1}
        >
            <InputDate
                control={control}
                name='date'
                rules={{required: true}}
                defaultValue={null}
                label='дата'
                required
                error={!!errors.date}
                helperText={errors?.date?.message}
            />
            <Input
                control={control}
                name='estimate'
                rules={{required: true}}
                defaultValue={null}
                label="оценка"
                required
                type='search'
                error={!!errors.estimate}
                helperText={errors?.estimate?.message}
                fullWidth
            />
            <DropdownList
                style={{minWidth: "200px"}}
                control={control}
                name='tblDictSubjectId'
                rules={{required: true}}
                defaultValue={null}
                label='предмет'
                required
                renderItem={renderSubject}
                error={!!errors.tblDictSubjectId}
                helperText={errors?.tblDictSubjectId?.message}
                fullWidth
            />

        </FormWrapField>
    );
}

export default FaceEntranceExaminEdit;