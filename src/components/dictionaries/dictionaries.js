import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
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

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function Dictionaries() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        <Tab label="документы" {...a11yProps(0)} />
                        <Tab label="уровни образования" {...a11yProps(1)} />
                        <Tab label="страны" {...a11yProps(2)} />
                        <Tab label="города" {...a11yProps(3)} />
                        <Tab label="улицы" {...a11yProps(4)} />
                        <Tab label="типы контактов" {...a11yProps(5)} />
                        <Tab label="предметы" {...a11yProps(6)} />
                        <Tab label="форма обучения" {...a11yProps(7)} />
                        <Tab label="результат аттестации" {...a11yProps(8)} />
                        <Tab label="структура" {...a11yProps(9)} />
                    </Tabs>
                </AppBar>
                {/*<SwipeableViews*/}
                {/*    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/}
                {/*    index={value}*/}
                {/*    onChangeIndex={handleChange}*/}
                {/*>*/}
                <TabPanel value={value} index={0}>
                    <DictDoc/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DictEducationLevel/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DictCountry/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DictCity/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <DictStreet/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <DictContactType/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <DictSubject />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <DictEducationForm />
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <DictCertificationResult />
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <DictEnterpriseAsTree />
                </TabPanel>
                {/*</SwipeableViews>*/}
            </Paper>
        </div>
    );
}


//export default Dictionaries;