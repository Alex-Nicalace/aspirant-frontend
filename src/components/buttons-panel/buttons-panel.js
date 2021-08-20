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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
       //margin: `${theme.spacing(1)}px 0px`,
        '& div': {
            margin: theme.spacing(1),
            //color: green[500]
            //border:'1px solid red'
        },
        '& div:last-child': {
            marginRight: 0,
        }
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
        <Grid
            container
            justifyContent='flex-end'
            className={styles.root}
        >
            <Grid item className='btn'>
                <Button
                    variant='outlined'
                    //className={styles.btnUpd}
                    color='primary'
                    size='small'
                    startIcon={<AddCircleOutlineIcon/>}
                    onClick={(e) => setModeEdit('insert', e)}
                >
                    добавить
                </Button>
            </Grid>

            <Grid item>
                <Button
                    variant='outlined'
                    //classes={styles.btnDel}
                    size='small'
                    color='secondary'
                    startIcon={<DeleteOutlineIcon/>}
                    onClick={deleteRec}
                    disabled={!currentRec}
                >
                    удалить
                </Button>
            </Grid>

            <Grid item>
                <Button
                    variant='outlined'
                    //className={styles.btnUpd}
                    //color='secondary'
                    size='small'
                    startIcon={<EditIcon/>}
                    onClick={(e) => setModeEdit('update', e)}
                    disabled={!currentRec}
                >
                    редактировать
                </Button>
            </Grid>

        </Grid>
    );
};

export default ButtonsPanel;