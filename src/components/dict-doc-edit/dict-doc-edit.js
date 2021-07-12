import React, {useContext, useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormButtons from "../form-buttons";
import {AspirantApiContext} from "../context/aspirant-api-context";
import FormFields from "../form-fields";

const recInit = {
    document: ''
}

const DictDocEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {dictDoc} = useContext(AspirantApiContext);
    return (
        <FormFields
            data={dictDoc}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            recInit={recInit}
        >
            <TextField
                id="kind-document"
                label="тип документа"
                required
                type='search'
                fullWidth
                name='document'
            />
        </FormFields>
    )
};

export default DictDocEdit;