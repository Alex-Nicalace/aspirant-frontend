import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        '& button': {
            margin: '1em'
        }
    },
    btnSave: {
        background: green["300"],
    },
    btnCancel: {
        background: yellow.A100,
    },
}));

const FormButtons = ({children, saveBtn, closeEdit}) => {
    const classes = useStyles();
    return (
        <form onSubmit={saveBtn} className={classes.root}>
            <Box>
            {children}
            </Box>
            <Box m={1} style={{textAlign:'right'}}>
                <Button
                    variant='contained'
                    className={classes.btnSave}
                    type='submit'
                >
                    Сохранить
                </Button>
                <Button
                    variant='contained'
                    className={classes.btnCancel}
                    onClick={closeEdit}
                >
                    Отмена
                </Button>
            </Box>
        </form>
    );
};

export default FormButtons;