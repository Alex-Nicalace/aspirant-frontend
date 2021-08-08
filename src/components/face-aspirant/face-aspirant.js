import React from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FaceAspirantEdit from "../face-aspirant-edit";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'isRecommendation', disablePadding: false, label: 'реком. сов. фак.'},
    {id: 'isProtocol', disablePadding: false, label: 'выписка из протокола'},
    {id: 'isAgree', disablePadding: false, label: 'согласие на науч. рук.'},
    {id: 'isHeadDepartment', disablePadding: false, label: 'согласование зав. каф.'},
    {id: 'dissertationTheme', disablePadding: false, label: 'тема диссертации'},
    {id: 'educationForm', disablePadding: false, label: 'форма обучения'},
    {id: 'nameDirection', disablePadding: false, label: 'направление обучения'},
    {id: 'subject', disablePadding: false, label: 'ин. яз'},
    {id: 'DirectionalityOrSpecialty', disablePadding: false, label: 'направленность/специальность'},
    {id: 'subDiv', disablePadding: false, label: 'кафедра'},
    {id: 'academicAdvisor', disablePadding: false, label: 'научный руководитель'},
];

const FaceAspirant = ({faceId}) => {
    const {
        faceAspirant: {
            datasetModify, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();

    const fetchForCurrentId = () => {
        fetch(faceId);
    }

    return (
        <TableEdit
            headCells={headCells}
            isLoading={isLoading}
            dataset={datasetModify}
            error={error}
            deleteRec={deleteRec}
            fetch={fetchForCurrentId}
            FormEdit={FaceAspirantEdit}
            initialOrderBy='dateOn'
        />
    );
};

export default FaceAspirant;