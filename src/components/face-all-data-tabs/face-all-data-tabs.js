import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FacesDataWrap from "../faces-data-wrap";
import FaceNames from "../face-names";
import FaceResidences from "../face-residences";
import FaceContacts from "../face-contacts";
import FaceDocuments from "../face-documents";
import FaceCitizenships from "../face-citizenships";
import FaceEducations from "../face-educations";
import FaceWorks from "../face-works";
import FaceEntranceExamin from "../face-entrance-examin";
import FaceScientificPubl from "../face-scientific-publ";
import FaceBusinessTrip from "../face-business-trip";
import FaceExaminations from "../face-examinations";
import FaceCertificationResult from "../face-certification-result";
import Typography from "@material-ui/core/Typography";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FaceOrders from "../face-orders";

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

const tabs = [
    {
        id: 0,
        label: 'данные о лице',
        content: (faceId) => <>
            <FacesDataWrap head='хронология ФИО'>
                <FaceNames faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='проживание'>
                <FaceResidences faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='контакты'>
                <FaceContacts faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 1,
        label: 'документы, гражданство',
        content: (faceId) => <>
            <FacesDataWrap head='документы'>
                <FaceDocuments faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='гражданство'>
                <FaceCitizenships faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 2,
        label: 'образование',
        content: (faceId) => <>
            <FacesDataWrap head='образование'>
                <FaceEducations faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 3,
        label: 'трудавая деятельность',
        content: (faceId) => <>
            <FacesDataWrap head='образование'>
                <FaceWorks faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 4,
        label: 'кандидатский минимум',
        content: (faceId) => <>
            <FacesDataWrap head='кандидатский минимум'>
                <FaceEntranceExamin faceId={faceId} isCandidateMin={true}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 5,
        label: 'вступительные экзамены',
        content: (faceId) => <>
            <FacesDataWrap head='вступительные экзамены'>
                <FaceEntranceExamin faceId={faceId} isCandidateMin={false}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 6,
        label: 'научные публикации',
        content: (faceId) => <>
            <FacesDataWrap head='научные публикации'>
                <FaceScientificPubl faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 7,
        label: 'коммандировки',
        content: (faceId) => <>
            <FacesDataWrap head='коммандировки'>
                <FaceBusinessTrip faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 8,
        label: 'экзамены',
        content: (faceId) => <>
            <FacesDataWrap head='экзамены'>
                <FaceExaminations faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 9,
        label: 'аттестация',
        content: (faceId) => <>
            <FacesDataWrap head='аттестация'>
                <FaceCertificationResult faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
    {
        id: 10,
        label: 'приказы',
        content: (faceId) => <>
            <FacesDataWrap head='фигурирует в приказах'>
                <FaceOrders faceId={faceId}/>
            </FacesDataWrap>
        </>
    },
]

const FaceAllDataTabs = ({faceId}) => {
    const {faces: {dataset, fetchOne}} = useAspirantApiContext();
    const [value, setValue] = React.useState(0);

    const face = dataset.find(i => +i.id === +faceId);

    useEffect(() => {
        if (!face)
            fetchOne(faceId);
    }, [face, faceId])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography align='center' variant='h5' color='textPrimary' gutterBottom>
                {face && `${face.lastname} ${face.firstname} ${face.middleName}, ${new Date(face.birthdate).toLocaleDateString()} г.р.`}
            </Typography >
            <Paper elevation={3}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        defaultValue={tabs[0].id}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons= "auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {tabs.map(i => <Tab key={i.id} value={i.id} label={i.label}/>)}
                    </Tabs>
                </AppBar>
                {tabs.map(i => <TabPanel key={i.id} index={i.id} value={value}>
                    {i.content(faceId)}
                </TabPanel>)}
            </Paper>
        </div>
    )
}

export default FaceAllDataTabs;