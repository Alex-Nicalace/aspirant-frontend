import React, {useContext, useEffect} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";
import {KeyboardDatePicker} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const recInit = {
    dateOn: null,
    dateOff: null,
    tblDictCountryId: '',
    tblDictDocId: '',
    numDocument: '',
    tblFaceId: null,
}

const FaceDocumentsEdit = ({closeEdit, modeEdit, currentRec}) => {
    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {faceDocuments, dictDoc, dictCountry} = useContext(AspirantApiContext);
    useEffect(() => {
        dictDoc.fetch();
        dictCountry.fetch();
    }, [])
    const {faceId} = faceDocuments;
    recInit.tblFaceId = faceId; // tblFaceId foreign key

    const renderDocsKind = dictDoc.dataset.map((i) => <MenuItem key={i.id} value={i.id}>{i.document} </MenuItem>);
    renderDocsKind.unshift(<MenuItem key='dictDoc-key' value=''> <em>не выбрано</em> </MenuItem>);

    const renderCountry = dictCountry.dataset.map((i) => <MenuItem key={i.id} value={i.id}>{i.country} </MenuItem>);
    renderCountry.unshift(<MenuItem key='dictCountry-key' value=''> <em>не выбрано</em> </MenuItem>);

    return (
        <FormFields
            data={faceDocuments}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            //recInit={recInit}
        >
            <FormControl style={{minWidth: "200px"}}>
                <InputLabel id='document-label'>документ</InputLabel>
                <Select
                    labelId='document-label'
                    id='document-select'
                    name='tblDictDocId'
                >
                    {renderDocsKind}
                </Select>
            </FormControl>

            <FormControl style={{minWidth: "200px"}}>
                <InputLabel id='country-label'>страна</InputLabel>
                <Select
                    labelId='country-label'
                    id='country-select'
                    name='tblDictCountryId'
                >
                    {renderCountry}
                </Select>
            </FormControl>

            <KeyboardDatePicker
                id='dateOn-id'
                label='выдан'
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
                label='действителен до'
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
                id="num-document-id"
                label="номер документа"
                required
                type='search'
                fullWidth
                name='numDocument'
            />

        </FormFields>
    );
};

export default FaceDocumentsEdit;