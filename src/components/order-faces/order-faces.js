import React, {useEffect} from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import OrderFacesEdit from "../order-faces-edit";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'lastname', disablePadding: false, label: 'фамилия'},
    {id: 'firstname', disablePadding: false, label: 'имя'},
    {id: 'middleName', disablePadding: false, label: 'отчество'},
    {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
];

const OrderFaces = ({orderId}) => {
    const {
        orderFaces: {
            datasetModify, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();

    useEffect(() => {
        fetch(orderId);
    }, [orderId])

    // useEffect(() => {
    //     console.log(dataset);
    //     console.log(datasetModify);
    // }, [datasetModify])

    // const fetchForCurrentId = () => {
    //     fetch(orderId);
    // }

    return (
        <TableEdit
            headCells={headCells}
            isLoading={isLoading}
            dataset={datasetModify}
            error={error}
            deleteRec={deleteRec}
            //fetch={fetchForCurrentId}
            FormEdit={OrderFacesEdit}
            initialOrderBy='dateOn'
        />
    );
};

export default OrderFaces;