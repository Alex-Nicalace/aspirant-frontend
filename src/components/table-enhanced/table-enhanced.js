import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import {useTheme} from "@material-ui/core";
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {NavLink} from "react-router-dom";

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

/*const headCells = [
    {id: 'id_car', numeric: true, disablePadding: false, key: true},
    {id: 'num_car', numeric: false, disablePadding: false, label: '№ автомобиля'},
    {id: 'name_m', numeric: false, disablePadding: false, label: 'марка'},
    {id: 'cvet', numeric: false, disablePadding: false, label: 'цвет'},
    {id: 'type_auto', numeric: false, disablePadding: false, label: 'тип'},
    {id: 'dop_info', numeric: false, disablePadding: false, label: 'доп. инф.'},
];*/

function TablePaginationActions({count, page, rowsPerPage, onPageChange}) {
    const classes = useStyles1();
    const theme = useTheme();

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </div>
    );
}

function EnhancedTableHead({classes, order, orderBy, onRequestSort, headCells}) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.filter(headCell => headCell.label).map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        //sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

function formatingOnType(value, dataType) {
    if ((typeof value === 'boolean') && !dataType)
        dataType = 'boolean';
    switch (dataType) {
        case 'date':
            return value && new Date(value).toLocaleDateString();
        case 'time':
            return value && new Date(value).toLocaleTimeString()
        case 'datetime':
            return value && new Date(value).toLocaleString()
        case 'boolean':
            return <Checkbox size='small' color='default' checked={value} /> //value && 'да'
        default:
            return value;
    }

}

function formatingCell(row, column) {
    const value = formatingOnType(row[column.id], column.dataType);

    function joinLink() {
        /*    linkDivided: [
                {value: 'tabs', isField: false},
                {value: 'ObjectName', isField: true},
                {value: 'AddrTreeID', isField: true},
            ]*/

        const res = column.linkDivided.reduce((prevValue, item) => {
            return `${prevValue}${item.isField ? row[item.value] : item.value}`
        }, '')

        return res;

    }

    if (column.link)
        return (
            <Link component={NavLink} to={`${column.link}${row[column.linkArgument]}`}> {value} </Link>
        )

    if (column.linkDivided)
        return (
            <Link component={NavLink} to={joinLink()}> {value} </Link>
        )

    return value

}

export default function TableEnhanced({
                                          dataset,
                                          error,
                                          isLoading,
                                          headCells,
                                          maxHeight = '300px',
                                          initialOrderBy,
                                          onGetKeyValue = () => {
                                          },
                                          selectedKey,
                                          masterFieldName,
                                      }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: maxHeight,
            // minHeight: '300px'
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 500,
            '& th': {
                fontWeight: 'bold',
            }

        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }));
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(initialOrderBy);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const keyField = headCells.find(item => item.key).id;
    const visibleFields = headCells.filter(item => item.label);

   // console.log(maxHeight);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dataset.length - page * rowsPerPage);

    masterFieldName = masterFieldName || keyField;

    return (
        // <div className={classes.root}>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table
                    stickyHeader
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size='small'
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        numSelected={null}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={() => {
                        }}
                        onRequestSort={handleRequestSort}
                        rowCount={dataset.length}
                        headCells={headCells}
                    />
                    <TableBody>
                        {stableSort(dataset, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={row[keyField]}
                                        onClick={() => onGetKeyValue(row[masterFieldName])}
                                        selected={selectedKey && row[masterFieldName] === selectedKey}
                                        style={{cursor: "pointer"}}
                                    >
                                        {visibleFields.map((item, index) =>
                                            <TableCell
                                                key={item.id}
                                            >
                                                {formatingCell(row, item)}
                                            </TableCell>)}
                                    </TableRow>
                                );
                            })}
                        {/*{emptyRows > 0 && (*/}
                        {/*    <TableRow style={{height: 33 * emptyRows}}>*/}
                        {/*        <TableCell colSpan={5}/>*/}
                        {/*    </TableRow>*/}
                        {/*)}*/}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[15, 30, 60, {label: 'Всё', value: -1}]}
                colSpan={3}
                component="div"
                count={dataset.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                SelectProps={{
                    inputProps: {'aria-label': 'rows per page'},
                    native: true,
                }}
            />

        </Paper>
        // </div>
    );
}

