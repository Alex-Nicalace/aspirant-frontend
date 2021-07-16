import React, {useContext} from 'react';
import {AspirantApiContext} from "../context/aspirant-api-context";
import TextField from "@material-ui/core/TextField";
import FormFields from "../form-fields";

const recInit = {
    name: '',
    note: '',
    parentId: null
}

const DictEnterpriseEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {dictEnterprise} = useContext(AspirantApiContext);
    return (
        <FormFields
            data={dictEnterprise}
            currentRec={currentRec}
            closeEdit={closeEdit}
            modeEdit={modeEdit}
            recInit={{...recInit, parentId: currentRec}}
        >
            <TextField
                id="name-id"
                label="название"
                required
                type='search'
                fullWidth
                name='name'
            />
            <TextField
                id="note-id"
                label="примечание"
                // required
                type='search'
                fullWidth
                name='note'
            />
        </FormFields>
    );
};

export default DictEnterpriseEdit;