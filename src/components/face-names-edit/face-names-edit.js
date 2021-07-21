import React, {useContext} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";
import {KeyboardDatePicker} from "@material-ui/pickers";

const recInit = {
    dateOn: null,
    lastname: '',
    firstname: '',
    middleName: '',
}

const FaceNamesEdit = ({closeEdit, modeEdit, currentRec}) => {
    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {faceNames} = useContext(AspirantApiContext);
    const {faceId} = faceNames;
    recInit.tblFaceId = faceId; // tblFaceId foreign key
    return (
        <FormFields
            data={faceNames}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            recInit={recInit}
        >
            <KeyboardDatePicker
                id='dateOn-id'
                label='актуально с'
                variant='inline' // календарь где показывать
                format='dd.MM.yyyy'
                name='dateOn'
                autoOk
                isDataPicker={true}
                KeyboardButtonProps={{
                    'arial-label': 'secondary checkbox',
                }}
            />
            <TextField
                id="lastname-id"
                label="фамилия"
                required
                type='search'
                fullWidth
                name='lastname'
            />
            <TextField
                id="firstname-id"
                label="имя"
                required
                type='search'
                fullWidth
                name='firstname'
            />
            <TextField
                id="middleName-id"
                label="отчество"
                required
                type='search'
                fullWidth
                name='middleName'
            />
        </FormFields>
    );
};

export default FaceNamesEdit;