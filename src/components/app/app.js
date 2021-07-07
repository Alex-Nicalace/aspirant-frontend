import React, {useState} from "react";
import DictDoc from "../dict-doc";
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import AppHeader from "../app-header";
import AppDrawer from "../app-drawer";
import AppRouter from "../app-router/app-router";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const App = () => {
    const classes = useStyles();
    const [isVisibleAppDrawer, setIsVisibleAppDrawer] = useState(false);

    const toggleAppDrawerHandler = () => {
        setIsVisibleAppDrawer((visibleAppDrawer) => !visibleAppDrawer)
    }

    return (
        <div className={classes.root}>
            <AppHeader
                toggleAppDrawer={toggleAppDrawerHandler}
                isVisibleAppDrawer={isVisibleAppDrawer}
            />
            <AppDrawer
                isVisibleAppDrawer={isVisibleAppDrawer}
                toggleAppDrawer={toggleAppDrawerHandler}
            />
            <Container>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <AppRouter/>
                </main>
            </Container>

        </div>
    )

}

export default App;