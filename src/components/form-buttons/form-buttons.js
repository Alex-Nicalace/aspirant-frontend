import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    btnGrid: {
        '& button': {
            margin: theme.spacing(1),
        }
    },
}));

const FormButtons = ({children, saveBtn, closeEdit}) => {
    const classes = useStyles();
    return (
        <form /*onSubmit={saveBtn} */ >
            <Box>
                {children}
            </Box>
            <Grid container justifyContent='flex-end' className={classes.btnGrid}>
                <Grid item>
                    <Button
                            variant='contained'
                            color='primary'
                            size='small'
                            onClick={saveBtn}
                    >
                        Сохранить
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        onClick={closeEdit}
                        color='secondary'
                        size='small'
                    >
                        Отмена
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormButtons;