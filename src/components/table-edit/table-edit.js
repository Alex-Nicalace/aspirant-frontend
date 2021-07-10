import React, {useContext, useEffect, useState} from "react";
import {AspirantApiContext} from "../context/aspirant-api-context";
import TableEnhanced from "../table-enhanced";
import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonsPanel from "../buttons-panel";
import Popover from "@material-ui/core/Popover";
import {Container} from "@material-ui/core";
import DialogAlert from "../dialog-alert";
import Notification from "../notification";
import {DURATION_MESSAGE} from "../../utils/consts";

// const headCells = [
//     {id: 'id', disablePadding: false, key: true},
//     {id: 'document', disablePadding: false, label: 'документ'},
// ];

const TableEdit = ({
                       headCells,
                       dataset, isLoading, error,
                       fetch,
                       deleteRec,
                       FormEdit,
                       initialOrderBy
                   }) => {
    const {
        messages: {
            messages,
            destroyMessage,
        }

    } = useContext(AspirantApiContext);

    const [modeEdit, setModeEdit] = useState(null)
    const [currentRec, setCurrentRec] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShowDialog, setIsShowDialog] = useState(false);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const openNotification = Boolean(messages.message)

    useEffect(() => {
        fetch();
    }, [])

    useEffect(() => {
        if (currentRec) {
            const result = dataset.find(i => i.id === currentRec);
            !result && setCurrentRec(null);
        }

    }, [dataset])

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
    }

    const handleClickOpenDialog = () => {
        if (currentRec) {
            setIsShowDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setIsShowDialog(false);
    };

    const handleCloseNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        destroyMessage();
    };

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
                    <FormEdit
                        closeEdit={closeEditHandle}
                        modeEdit={modeEdit}
                        currentRec={currentRec}
                    />
                </Container>
            </Popover>

            <Notification
                message={messages.message}
                type={messages.typeMessage}
                autoHideDuration={DURATION_MESSAGE}
                open={openNotification}
                handleClose={handleCloseNotification}
            />

        </>
    );
}

export default TableEdit;