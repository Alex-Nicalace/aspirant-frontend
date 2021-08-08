import React, {useEffect, useState} from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FaceAcademicAdvisorEdit from "../faces-academic-advisor-edit";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'lastname', disablePadding: false, label: 'фамилия'},
    {id: 'firstname', disablePadding: false, label: 'имя'},
    {id: 'middleName', disablePadding: false, label: 'отчество'},
    {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
];

const FacesAcademicAdvisor = ({
                                  changeSelected = () => {
                                  },
                                  selected
                              }) => {
    const {
        facesAcademicAdvisor: {
            datasetModify, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();
    //const [academicAdvisorId, setAcademicAdvisorId] = useState(null);

    // useEffect(() => {
    //     changeAcademicAdvisorId(academicAdvisorId);
    // }, [academicAdvisorId]);

    const changeAcademicAdvisorIdHandle = (id) => {
        //console.log(`comp - FacesList, id=${faceId}`);
        //setAcademicAdvisorId(id);
        changeSelected(id) ;
        // changeAcademicAdvisorId(id);
    }

    return (
        <TableEdit
            headCells={headCells}
            isLoading={isLoading}
            dataset={datasetModify}
            error={error}
            deleteRec={deleteRec}
            fetch={fetch}
            FormEdit={FaceAcademicAdvisorEdit}
            initialOrderBy='createdAt'
            onGetKeyValue={changeAcademicAdvisorIdHandle}
            currentRecInitial={selected}
        />
    );
};

export default FacesAcademicAdvisor;