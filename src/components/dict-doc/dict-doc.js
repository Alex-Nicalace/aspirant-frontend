import React, {useContext, useEffect, useState} from "react";
import {AspirantApiContext} from "../context/aspirant-api-context";
import TableEnhanced from "../table-enhanced";
import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonsPanel from "../buttons-panel";
import DictDocEdit from "../dict-doc-edit";
import Popover from "@material-ui/core/Popover";
import {Container} from "@material-ui/core";
import DialogAlert from "../dialog-alert";
import ErrorIndicator from "../error-indicator";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'document', disablePadding: false, label: 'документ'},
];

const DictDoc = () => {
    const {
        dictDoc: {dataset, isLoading, error},
        fetchDictDocApi,
        deleteDictDocApi,
        insertDictDocApi,
        updateDictDocApi
    } = useContext(AspirantApiContext);

    const [modeEdit, setModeEdit] = useState(null)
    const [currentRec, setCurrentRec] = useState(null);
    const [document, setDocument] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isShowDialog, setIsShowDialog] = React.useState(false);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        fetchDictDocApi();
    }, [])

    useEffect(() => {
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            if (result)
                setDocument(result.document);
            return;
        }
        setDocument('');
    }, [modeEdit]);

    const changeTypeDocumentHandle = (e) => {
        setDocument(e.target.value)
    }

    const setModeEditHandle = (modeEdit, event) => {
        if (modeEdit === 'update' && !currentRec)
            return;
        setModeEdit(modeEdit);
        setAnchorEl(event.currentTarget);
    }

    const closeEditHandle = () => {
        setModeEdit(null);
        setAnchorEl(null);
    }

    const saveChangesHandle = (e) => {
        e.preventDefault();

        closeEditHandle();

        if (modeEdit === 'insert')
            return insertDictDocApi({document});

        if (modeEdit === 'update' && currentRec)
            return updateDictDocApi({id: currentRec, document});

    }

    const deleteRecHandle = async () => {
        if (currentRec) {
            await deleteDictDocApi(currentRec);
        }
    }

    const handleClickOpenDialog = () => {
        if (currentRec) {
            setIsShowDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setIsShowDialog(false);
    };

    if (error)
        return <ErrorIndicator message={error.data.message}/>

    if (isLoading)
        return <CircularProgress/>

    return (
        <>
            <ButtonsPanel
                setModeEdit={setModeEditHandle}
                deleteRec={handleClickOpenDialog}
                currentRec={currentRec}

            />
            <TableEnhanced
                dataset={dataset}
                headCells={headCells}
                initialOrderBy='document'
                onGetKeyValue={setCurrentRec}
                selectedKey={currentRec}
            />
            <DialogAlert
                message='Вы действительно хотите удалить запись?'
                title='УДАЛЕНИЕ'
                isShowDialog={isShowDialog}
                handleClose={handleCloseDialog}
                handleYes={deleteRecHandle}
            />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                //onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Container>
                    <DictDocEdit
                        //setModeEdit={setModeEdit}
                        changeTypeDocument={changeTypeDocumentHandle}
                        document={document}
                        saveBtn={saveChangesHandle}
                        closeEdit={closeEditHandle}
                    />
                </Container>
            </Popover>

        </>
    );
}

export default DictDoc;