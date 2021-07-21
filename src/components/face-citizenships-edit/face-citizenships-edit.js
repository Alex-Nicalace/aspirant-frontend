import React, {useContext, useEffect} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";
import {KeyboardDatePicker} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const FaceCitizenshipsEdit = ({closeEdit, modeEdit, currentRec}) => {
    /*такие вот мысли .... редактирование хронологии как правило делается в контектсте редактирвания
    данных о лице кот. уже загружены и в стейте на этот момент уже есть ИД лица
    другой вариант это пробрасывать это свойство сюда через пропсы
    пробую первый вариант брать из стейта
    * */
    const {faceCitizenships, dictCountry} = useContext(AspirantApiContext);
    useEffect(() => {
        dictCountry.fetch();
    }, [])
    const {faceId} = faceCitizenships;
    //recInit.tblFaceId = faceId; // tblFaceId foreign key

    const renderCountry = dictCountry.dataset.map((i) => <MenuItem key={i.id} value={i.id}>{i.country} </MenuItem>);
    renderCountry.unshift(<MenuItem key='dictCountry-key' value=''> <em>не выбрано</em> </MenuItem>);

    return (
        <FormFields
            data={faceCitizenships}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            //recInit={recInit}
            valuesToState={{tblFaceId: faceId}}
        >

            <FormControl style={{minWidth: "200px"}}>
                <InputLabel id='country-label'>гражданство</InputLabel>
                <Select
                    labelId='country-label'
                    id='country-select'
                    name='tblDictCountryId'
                >
                    {renderCountry}
                </Select>
            </FormControl>
        </FormFields>
    );
};

export default FaceCitizenshipsEdit;