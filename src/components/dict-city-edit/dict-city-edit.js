import React, {useContext, useEffect, useState} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import FormWrap from "../form-wrap";
import TextField from "@material-ui/core/TextField";

const DictCityEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {
        dictCity: {
            insertRec,
            updateRec,
            dataset
        }} = useContext(AspirantApiContext);
    const [city, setCity] = useState('');

    useEffect(() => {
        // чтобы в момоент редактирования в форме оказались редактируемые данные
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            result && setCity(result.city);
            return;
        }
        setCity('');
    }, [modeEdit]);

    const changeValueHandle = (e) => {
        setCity(e.target.value)
    }

    const saveChangesHandle = async (e) => {
        e.preventDefault();

        closeEdit();

        switch (modeEdit) {
            case 'insert':
                await insertRec({city});
                return
            case 'update':
                await updateRec({id: currentRec, city});
                return
            default:
                return
        }
    }
    return (
        <FormWrap saveBtn={saveChangesHandle} closeEdit={closeEdit}>
            <TextField
                id="city"
                label="город"
                required
                type='search'
                value={city}
                onChange={changeValueHandle}
                fullWidth
            />
        </FormWrap>
    );
};

export default DictCityEdit;