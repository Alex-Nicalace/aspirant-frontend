import React from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import green from "@material-ui/core/colors/green";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const ButtonsPanel = ({deleteRec, setModeEdit, currentRec}) => {
    return (
        <Box
            p={1}
            style={{textAlign:'right'}}

        >
            <Button
                variant='contained'
                startIcon={<AddCircleOutlineIcon style={{ color: green[500] }}/>}
                onClick={(e) => setModeEdit('insert', e)}
            >
                добавить
            </Button>

            <Button
                variant='contained'
                startIcon={<DeleteOutlineIcon />}
                onClick={deleteRec}
                disabled={!currentRec}
            >
                удалить
            </Button>

            <Button
                variant='contained'
                startIcon={<EditIcon />}
                onClick={(e) => setModeEdit('update', e)}
                disabled={!currentRec}
            >
                редактировать
            </Button>

        </Box>
    );
};

export default ButtonsPanel;