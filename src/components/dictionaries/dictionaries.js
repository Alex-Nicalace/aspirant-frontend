import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import {dictionariesSubRoutes} from "../../routes";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // width: 500,
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function Dictionaries() {
    const history = useHistory();
    const classes = useStyles();
    const {pathname} = useLocation();

    // если указан не существующий роут справочника то отпеределить значение из епервого элмента ройтов
    // иначе предупрежедние мол указано не существующее значение
    const pathCandidate = dictionariesSubRoutes.find(item => item.path === pathname)
    const value = pathCandidate ? pathname : dictionariesSubRoutes[0].path;

    const handleChange = (event, newValue) => {
        history.push(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        defaultValue={dictionariesSubRoutes[0].path}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {dictionariesSubRoutes.map(i => <Tab value={i.path} label={i.label} key={i.path}/>)}
                    </Tabs>
                </AppBar>
                <Switch>
                    {dictionariesSubRoutes.map(({path, component}) =>
                        <Route key={path} path={path} render={() => component} exact/>)};
                    <Redirect to={dictionariesSubRoutes[0].path}/>
                </Switch>
            </Paper>
        </div>
    );
}