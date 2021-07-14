import React, {useContext, useEffect} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {AspirantApiContext} from "../context/aspirant-api-context";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles" ;

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

const DictEnterpriseAsTree = () => {
    const {
        dictEnterprise: {
            datasetAsTree, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useContext(AspirantApiContext);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect  = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    if (isLoading)
        return <CircularProgress/>

    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={`${nodes.id}-`} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    const renderTreeMain = (dataset) => (
        <>
            {dataset.map(node => renderTree(node))}
        </>
    )
    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {renderTreeMain(datasetAsTree)}
        </TreeView>
    );
};

export default DictEnterpriseAsTree;