import React from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles} from '@material-ui/core/styles'

const useStyles  = makeStyles(theme => ({
    root: {
        textAlign:'right',
        '& button': {
            marginLeft: theme.spacing(1),
            //color: green[500]

        },
    },
    btnAdd: {
        color: green[500]
    },
    btnDel: {
        color: green[500]
    },
    btnUpd: {
        color: yellow[500]
    }
}))

const ButtonsPanel = ({deleteRec, setModeEdit, currentRec}) => {
    const styles = useStyles();
    return (
        <Box className={styles.root}
            p={1}
        >
            <Button
                variant='outlined'
                //className={styles.btnUpd}
                color='primary'
                size='small'
                startIcon={<AddCircleOutlineIcon  />}
                onClick={(e) => setModeEdit('insert', e)}
            >
                добавить
            </Button>

            <Button
                variant='outlined'
                //classes={styles.btnDel}
                size='small'
                color='secondary'
                startIcon={<DeleteOutlineIcon />}
                onClick={deleteRec}
                disabled={!currentRec}
            >
                удалить
            </Button>

            <Button
                variant='outlined'
                //className={styles.btnUpd}
                //color='secondary'
                size='small'
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