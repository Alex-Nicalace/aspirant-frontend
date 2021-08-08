import React from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FaceExaminationsEdit from "../face-examinations-edit";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'semesterNum', disablePadding: false, label: 'семестр'},
    {id: 'subject', disablePadding: false, label: 'предмет',},
    {id: 'estimate', disablePadding: false, label: 'оценка'},

];

const FaceExaminations = ({faceId}) => {
    const {
        faceExaminations: {
            dataset, isLoading, error,
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
            dataset={dataset}
            error={error}
            deleteRec={deleteRec}
            fetch={fetchForCurrentId}
            FormEdit={FaceExaminationsEdit}
            initialOrderBy='semesterNum'
        />
    );
};

export default FaceExaminations;