import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import DictDoc from "../dict-doc";
import DictCountry from "../dict-country";
import DictEducationLevel from "../dict-education-level";
import DictCity from "../dict-city";
import DictStreet from "../dict-street";
import DictContactType from "../dict-contact-type/dict-contact-type";
import {Paper} from "@material-ui/core";
import DictSubject from "../dict-subject";
import DictEducationForm from "../dict-education-form";
import DictCertificationResult from "../dict-certification-result";
import DictEnterpriseAsTree from "../dict-enterprise-as-tree";
import {useHistory} from "react-router-dom";

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

const tabsArray = [
    {value: 'type-document', label: 'документы', component: <DictDoc/>},
    {value: 'education-level', label: 'уровни образования', component: <DictEducationLevel/>},
    {value: 'country', label: 'страны', component: <DictCountry/>},
    {value: 'city', label: 'города', component: <DictCity/>},
    {value: 'street', label: 'улицы', component: <DictStreet/>},
    {value: 'type-contact', label: 'типы контактов', component: <DictContactType/>},
    {value: 'subject', label: 'предметы', component: <DictSubject/>},
    {value: 'education-form', label: 'форма обучения', component: <DictEducationForm/>},
    {value: 'certification-result', label: 'результат аттестации', component: <DictCertificationResult/>},
    {value: 'enterprise-as-tree', label: 'структура', component: <DictEnterpriseAsTree/>},
]

export default function Dictionaries({nameDict}) {
    const history = useHistory();
    const classes = useStyles();
    //const theme = useTheme();
    //const [value, setValue] = React.useState(0);
    const value = nameDict;

    const handleChange = (event, newValue) => {
        //setValue(newValue);
        history.push(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {tabsArray.map(i => <Tab value={i.value} label={i.label} key={i.value}/>)}
                    </Tabs>
                </AppBar>
                {/*<SwipeableViews*/}
                {/*    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/}
                {/*    index={value}*/}
                {/*    onChangeIndex={handleChange}*/}
                {/*>*/}
                {tabsArray.map(i => <TabPanel key={i.value} index={i.value} value={value}>{i.component}</TabPanel>)}
                {/*</SwipeableViews>*/}
            </Paper>
        </div>
    );
}


//export default Dictionaries;