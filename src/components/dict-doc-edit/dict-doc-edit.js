import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import { makeStyles } from '@material-ui/core/styles';
import {AspirantApiContext} from "../context/aspirant-api-context";

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

const DictDocEdit = ({changeTypeDocument, document, saveBtn, closeEdit}) => {
    const classes = useStyles();

    return (
        <form onSubmit={saveBtn} className={classes.root}>
            <Box>
                <TextField
                    id="kind-document"
                    label="тип документа"
                    required
                    type='search'
                    value={document}
                    onChange={changeTypeDocument}
                />
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

export default DictDocEdit;