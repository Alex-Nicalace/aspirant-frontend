import React, {useEffect, useState} from "react";
import TableEnhanced from "../table-enhanced";
import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonsPanel from "../buttons-panel";
import Popover from "@material-ui/core/Popover";
import {Container} from "@material-ui/core";
import DialogAlert from "../dialog-alert";
import ErrorIndicator from "../error-indicator";

// const headCells = [
//     {id: 'id', disablePadding: false, key: true},
//     {id: 'document', disablePadding: false, label: 'документ'},
// ];

const TableEdit = ({
                       headCells,
                       dataset, isLoading, error,
                       fetch = () => {},
                       deleteRec,
                       FormEdit,
                       initialOrderBy,
                       onGetKeyValue = () => {
                       },
                       valuesToState, // какието переменные которые нужно вставить при добавлении новых записей
                       currentRecInitial
                   }) => {

    const [modeEdit, setModeEdit] = useState(null)
    const [currentRec, setCurrentRec] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShowDialog, setIsShowDialog] = useState(false);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        setCurrentRec(currentRecInitial)
    }, [currentRecInitial])

    useEffect(() => {
        fetch();
    }, [])

    useEffect(() => {
        if (currentRec) {
            const result = dataset.find(i => i.id === currentRec);
            !result && setCurrentRec(null);
        }

    }, [dataset])

    // useEffect(() => {
    //     onGetKeyValue(currentRec)
    // }, [currentRec])

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

    const deleteRecHandle = async () => {
        if (currentRec) {
            await deleteRec(currentRec);
        }
        setIsShowDialog(false);
    }

    const handleClickOpenDialog = () => {
        if (currentRec) {
            setIsShowDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setIsShowDialog(false);
    };

    const handleSetCurrentRec= (id) => {
        setCurrentRec(id);
        onGetKeyValue(id)
    }

    if (error)
        return <ErrorIndicator error={error}  />

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
                initialOrderBy={initialOrderBy}
                onGetKeyValue={handleSetCurrentRec}
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
                    <FormEdit
                        closeEdit={closeEditHandle}
                        modeEdit={modeEdit}
                        currentRec={currentRec}
                        valuesToState={valuesToState}
                    />
                </Container>
            </Popover>



        </>
    );
}

export default TableEdit;