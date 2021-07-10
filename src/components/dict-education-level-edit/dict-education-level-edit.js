import React, {useContext, useEffect, useState} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import FormWrap from "../form-wrap";
import TextField from "@material-ui/core/TextField";

const DictEducationLevelEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {
        dictEducationLevels: {
            insertRec,
            updateRec,
            dataset
        }
    } = useContext(AspirantApiContext);
    const [educationLevel, setEducationLevel] = useState('');
    const [weightEducationLevel, setWeightEducationLevel] = useState('');

    useEffect(() => {
        // чтобы в момоент редактирования в форме оказались редактируемые данные
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            if (result) {
                setEducationLevel(result.educationLevel);
                setWeightEducationLevel(result.weightEducationLevel)
            }
            return;
        }
        setEducationLevel('');
        setWeightEducationLevel('');
    }, [modeEdit]);

    const changeValueHandle = (e) => {
        switch (e.target.name){
            case 'educationLevel':
                setEducationLevel(e.target.value);
                return;
            case 'weightEducationLevel':
                setWeightEducationLevel(e.target.value);
                return;
            default:
                return;
        }
    }

    const saveChangesHandle = async (e) => {
        e.preventDefault();

        closeEdit();

        switch (modeEdit) {
            case 'insert':
                await insertRec({educationLevel, weightEducationLevel});
                return
            case 'update':
                await updateRec({id: currentRec, educationLevel, weightEducationLevel});
                return
            default:
                return
        }
    }

    return (
        <FormWrap saveBtn={saveChangesHandle} closeEdit={closeEdit}>
            <TextField
                id="country"
                label="уровень образования"
                required
                type='search'
                value={educationLevel}
                onChange={changeValueHandle}
                fullWidth
                name='educationLevel'
            />
            <TextField
                id="country"
                label="приоритет"
                required
                type='search'
                value={weightEducationLevel}
                onChange={changeValueHandle}
                fullWidth
                name='weightEducationLevel'
            />
        </FormWrap>
    );
};

export default DictEducationLevelEdit;