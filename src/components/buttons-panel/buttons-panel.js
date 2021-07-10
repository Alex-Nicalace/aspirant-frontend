import React from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import green from "@material-ui/core/colors/green";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles} from '@material-ui/core/styles'

const useStyles  = makeStyles(theme => ({
    root: {
        textAlign:'right',
        '& button': {
            marginLeft: theme.spacing(1)
        }
    }
}))

const ButtonsPanel = ({deleteRec, setModeEdit, currentRec}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}
            p={1}
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