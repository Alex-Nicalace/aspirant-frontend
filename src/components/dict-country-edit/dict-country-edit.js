import React, {useContext, useEffect, useState} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import FormWrap from "../form-wrap";
import TextField from "@material-ui/core/TextField";

const DictCountryEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {
        dictCountry: {
            insertRec,
            updateRec,
            dataset
        }} = useContext(AspirantApiContext);
    const [country, setCountry] = useState('');

    useEffect(() => {
        // чтобы в момоент редактирования в форме оказались редактируемые данные
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            result && setCountry(result.country);
            return;
        }
        setCountry('');
    }, [modeEdit]);

    const changeValueHandle = (e) => {
        setCountry(e.target.value)
    }

    const saveChangesHandle = async (e) => {
        e.preventDefault();

        closeEdit();

        switch (modeEdit) {
            case 'insert':
                await insertRec({country});
                return
            case 'update':
                await updateRec({id: currentRec, country});
                return
            default:
                return
        }
    }

    return (
        <FormWrap saveBtn={saveChangesHandle} closeEdit={closeEdit}>
            <TextField
                id="country"
                label="страна"
                required
                type='search'
                value={country}
                onChange={changeValueHandle}
                fullWidth
            />
        </FormWrap>
    );
};

export default DictCountryEdit;