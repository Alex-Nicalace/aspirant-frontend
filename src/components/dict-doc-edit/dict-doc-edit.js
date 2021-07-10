import React, {useContext, useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormWrap from "../form-wrap";
import {AspirantApiContext} from "../context/aspirant-api-context";

const DictDocEdit = ({closeEdit, modeEdit, currentRec}) => {
    const {
        dictDoc: {
            insertRec,
            updateRec,
            dataset
    }} = useContext(AspirantApiContext);
    const [document, setDocument] = useState('');

    useEffect(() => {
        // чтобы в момоент редактирования в форме оказались редактируемые данные
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            result && setDocument(result.document);
            return;
        }
        setDocument('');
    }, [modeEdit]);

    const changeTypeDocumentHandle = (e) => {
        setDocument(e.target.value)
    }

    const saveChangesHandle = async (e) => {
        e.preventDefault();

        closeEdit();

        switch (modeEdit) {
            case 'insert':
                await insertRec({document});
                return
            case 'update':
                await updateRec({id: currentRec, document});
                return
            default:
                return
        }
    }

    return (
        <FormWrap saveBtn={saveChangesHandle} closeEdit={closeEdit}>
            <TextField
                id="kind-document"
                label="тип документа"
                required
                type='search'
                value={document}
                // onChange={changeTypeDocument}
                onChange={changeTypeDocumentHandle}
                fullWidth
            />
        </FormWrap>
    )
};

export default DictDocEdit;