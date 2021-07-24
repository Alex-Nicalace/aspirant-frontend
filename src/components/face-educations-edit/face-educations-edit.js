import React, {useContext, useEffect} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";
import {KeyboardDatePicker} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import {FormControlLabel} from "@material-ui/core";

// const recInit = {
//     dateOn: null,
//     dateOff: null,
//     tblDictCountryId: '',
//     tblDictDocId: '',
//     numDocument: '',
//     tblFaceId: null,
// }

const FaceEducationsEdit = ({closeEdit, modeEdit, currentRec}) => {
    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {faceEducations, dictEducationLevels} = useContext(AspirantApiContext);
    useEffect(() => {
        dictEducationLevels.fetch();
    }, [])
    const {faceId} = faceEducations;
    // recInit.tblFaceId = faceId; // tblFaceId foreign key

    const renderEducationLevel = dictEducationLevels.dataset.map((i) => <MenuItem key={i.id} value={i.id}>{i.educationLevel} </MenuItem>);
    renderEducationLevel.unshift(<MenuItem key='dictEducationLevel-key' value=''> <em>не выбрано</em> </MenuItem>);

    return (
        <FormFields
            data={faceEducations }
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            //recInit={recInit}
            valuesToState={{tblFaceId: faceId}}
        >
            <KeyboardDatePicker
                id='dateFinished-id'
                label='дата окончания'
                variant='inline' // календарь где показывать
                format='dd.MM.yyyy'
                name='dateFinished'
                value={null}
                autoOk
                isDataPicker={true}
                KeyboardButtonProps={{
                    'arial-label': 'secondary checkbox',
                }}
            />
            <TextField
                id="specialty-id"
                label="специальность"
                type='search'
                fullWidth
                name='specialty'
            />

            <FormControlLabel
                label='отличник'
                control={
                    <Checkbox
                        labelId='isExcellent-id-label'
                        //checked={}
                        //onChange={}
                        color='primary'
                        inputProps={{'aria-label': 'primary checkbox'}}
                        //checked={isBirthdate}
                        name='isExcellent'
                        isCheckBox={true}
                        //onChange={handleChangeStateChecked}
                    />
                }
            >

            </FormControlLabel>
            <TextField
                id="specialty-id"
                label="кол. уд. оценок"
                type='search'
                fullWidth
                name='quantitySatisfactory'
            />
            <FormControl style={{minWidth: "200px"}}>
                <InputLabel id='education-level-id-label'>уровень образования</InputLabel>
                <Select
                    labelId='education-level-id-label'
                    id='education-level-id-select'
                    name='tblDictEducationLevelId'
                >
                    {renderEducationLevel }
                </Select>
            </FormControl>

        </FormFields>
    );
};

export default FaceEducationsEdit;