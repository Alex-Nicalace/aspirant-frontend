import React, {useContext, useEffect} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";
import {KeyboardDatePicker} from "@material-ui/pickers";

// const recInit = {
//     dateOn: null,
//     dateOff: null,
//     tblDictCountryId: '',
//     tblDictDocId: '',
//     numDocument: '',
//     tblFaceId: null,
// }

const FaceWorksEdit = ({closeEdit, modeEdit, currentRec}) => {
    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {faceWorks} = useContext(AspirantApiContext);

    const {faceId} = faceWorks;
    // recInit.tblFaceId = faceId; // tblFaceId foreign key

    return (
        <FormFields
            data={faceWorks}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            //recInit={recInit}
            valuesToState={{tblFaceId: faceId}}
        >
            <KeyboardDatePicker
                id='dateOn-id'
                label='с'
                variant='inline' // календарь где показывать
                format='dd.MM.yyyy'
                name='dateOn'
                value={null}
                autoOk
                isDataPicker={true}
                KeyboardButtonProps={{
                    'arial-label': 'secondary checkbox',
                }}
            />
            <KeyboardDatePicker
                id='dateOff-id'
                label='по'
                variant='inline' // календарь где показывать
                format='dd.MM.yyyy'
                name='dateOff'
                value={null}
                autoOk
                isDataPicker={true}
                KeyboardButtonProps={{
                    'arial-label': 'secondary checkbox',
                }}
            />
            <TextField
                id="enterprise-id"
                label="место работы"
                type='search'
                fullWidth
                name='enterprise'
            />
            <TextField
                id="jobTitle-id"
                label="должность"
                type='search'
                fullWidth
                name='jobTitle'
            />
            <TextField
                id="lenOfService-id"
                label="период"
                type='search'
                fullWidth
                name='lenOfService'
            />
        </FormFields>
    );
};

export default FaceWorksEdit;