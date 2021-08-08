import React, {useContext, useEffect, useState} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {AspirantApiContext} from "../context/aspirant-api-context";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles" ;
import ButtonsPanel from "../buttons-panel";
import Popover from "@material-ui/core/Popover";
import {Container, Paper} from "@material-ui/core";
import DictEnterpriseEdit from "../dict-enterprise-edit";
import ErrorIndicator from "../error-indicator";
import DialogAlert from "../dialog-alert";
import Button from "@material-ui/core/Button";
import ShowMessage from "../show-message";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        //height: 216,
        flexGrow: 1,
        // maxWidth: 400,
    },
    reParentBtns: {
        textAlign: 'right',
        '& button': {
            marginLeft: theme.spacing(1)
        }
    }
}));

const DictEnterpriseAsTree = ({
                                  changeEnterpriseId = () => {},
                                  currentRecInit
                              }) => {
    const {
        dictEnterprise: {
            datasetAsTree, isLoading, error, dataset,
            fetch,
            deleteRec,
            updateRec,
        },
    } = useContext(AspirantApiContext);
    const classes = useStyles();
    const [expanded, setExpanded] = useState([1]); //контроль раскрытых веток
    const [selected, setSelected] = useState('1'); // контроль выделенных веток
    const [modeEdit, setModeEdit] = useState(null); // вставка или обновление
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [idForReParent, setIdForReParent] = useState(null);
    const [messageAboutReParent, setMessageAboutReParent] = useState(false);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        // полсе удаления записи затереть значение ИД
        if (selected) {
            const result = dataset.find(i => i.id === selected);
            !result && setSelected(0);
        }

    }, [dataset])

    useEffect(() => {
        if (idForReParent) {
            setMessageAboutReParent(true);
            setExpanded(expanded => expanded.filter(i => i !== idForReParent))
        }
    }, [idForReParent]);

    //
    useEffect(() => {
        setSelected(currentRecInit);
    }, [currentRecInit])

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleToggle = (event, nodeIds) => {
        //контроль раскрытых веток
        setExpanded(nodeIds.filter(i => i !== idForReParent));
    };

    const rememberIdForReParentHandler = () => {
        setIdForReParent(selected);
    }

    const reParentBranchHandler = () => {
        updateRec({id: idForReParent, parentId: selected});
        setIdForReParent(null);
    }

    const cancelReParentBranch = () => {
        setIdForReParent(null);
    }

    const handleSelect = (event, nodeIds) => {
        // контроль выделенных веток
        setSelected(nodeIds);
        changeEnterpriseId(nodeIds);
        //console.log(nodeIds)
    };

    if (error)
        return <ErrorIndicator error={error}/>

    if (isLoading)
        return <CircularProgress/>

    const setModeEditHandle = (modeEdit, event) => { // вставка или обновление
        if (modeEdit === 'update' && !selected)
            return;
        setModeEdit(modeEdit);
        setAnchorEl(event.currentTarget);
    }

    const closeEditHandle = () => {
        // закрыть окно редактирвания
        setModeEdit(null);
        setAnchorEl(null);
    }

    const handleClickOpenDialog = () => {
        // открвть диалог удаления
        if (selected) {
            setIsShowDialog(true);
        }
    };

    const deleteRecHandle = async () => {
        // удалить запись
        if (selected) {
            await deleteRec(selected);
            setIsShowDialog(false);
        }
    }

    const handleCloseDialog = () => {
        setIsShowDialog(false);
    };

    const closeMessageAboutReParentHandle = () => {
        setMessageAboutReParent(false);
    }

    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}
                  style={nodes.id === idForReParent ? {fontStyle: 'italic', textDecoration: 'underline'} : null}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    const renderTreeMain = (dataset) => ( // отрисовка дерева
        <>
            {dataset.map(node => renderTree(node))}
        </>
    )
    return (
        <>
            <ButtonsPanel
                setModeEdit={setModeEditHandle}
                deleteRec={handleClickOpenDialog}
                currentRec={selected}

            />
            <Paper elevation={2}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    expanded={expanded} //контролируемый компонент, раскрыты те ветки кот. в стейте
                    selected={selected} // выделенные записи
                    onNodeToggle={handleToggle} // контроль раскрытых веток
                    onNodeSelect={handleSelect} // контроль выделенных записей
                    // multiSelect
                >
                    {renderTreeMain(datasetAsTree)}
                </TreeView>
            </Paper>
            <Box className={classes.reParentBtns} m={1}>
                <Button variant='contained' onClick={rememberIdForReParentHandler}>вырезать</Button>
                <Button variant='contained' onClick={reParentBranchHandler} disabled={!idForReParent}>вставить</Button>
                <Button variant='contained' onClick={cancelReParentBranch} disabled={!idForReParent}>отмена</Button>
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                //onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Container>
                    <DictEnterpriseEdit
                        closeEdit={closeEditHandle}
                        modeEdit={modeEdit}
                        currentRec={selected}
                    />
                </Container>
            </Popover>

            <DialogAlert
                message='Вы действительно хотите удалить запись?'
                title='УДАЛЕНИЕ'
                isShowDialog={isShowDialog}
                handleClose={handleCloseDialog}
                handleYes={deleteRecHandle}
            />

            <ShowMessage
                message='Выберите новую ветку в качестве родительской и нажмите кнопку "ВСТАВИТЬ" или "ОТМЕНА", если передумали.'
                title='ИЗМЕНЕНИЕ ИЕРАРХИИ'
                handleClose={closeMessageAboutReParentHandle}
                open={messageAboutReParent}
            />
        </>

    );
};

export default DictEnterpriseAsTree;