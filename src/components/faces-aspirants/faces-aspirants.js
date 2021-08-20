import React, {useEffect, useState} from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FacesAspirantsEdit from "../faces-aspirants-edit";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'lastname', disablePadding: false, label: 'фамилия'},
    {id: 'firstname', disablePadding: false, label: 'имя'},
    {id: 'middleName', disablePadding: false, label: 'отчество'},
    {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
    {id: 'sex', disablePadding: false, label: 'пол'},
    {id: 'id', disablePadding: false, key: true},
    {id: 'isRecommendation', disablePadding: false, label: 'реком. сов. фак.'},
    {id: 'isProtocol', disablePadding: false, label: 'выписка из протокола'},
    {id: 'isAgree', disablePadding: false, label: 'согласие на науч. рук.'},
    {id: 'isHeadDepartment', disablePadding: false, label: 'согласование зав. каф.'},
    {id: 'dateOn', disablePadding: false, label: 'зачислен', dataType: 'date'},
    {id: 'dateOff', disablePadding: false, label: 'отчислен', dataType: 'date'},
    {id: 'dissertationTheme', disablePadding: false, label: 'тема диссертации'},
    {id: 'educationForm', disablePadding: false, label: 'форма обучения'},
    {id: 'nameDirection', disablePadding: false, label: 'направление обучения'},
    {id: 'subject', disablePadding: false, label: 'ин. яз'},
    {id: 'DirectionalityOrSpecialty', disablePadding: false, label: 'направленность/специальность'},
    {id: 'subDiv', disablePadding: false, label: 'кафедра'},
    {id: 'academicAdvisor', disablePadding: false, label: 'научный руководитель'},
    {id: 'orderIn', disablePadding: false, label: 'пр. о зачислении'},
    //{id: 'orderIn_tblFace_tblOrderId', disablePadding: false, label: 'id'},
    {id: 'orderOut', disablePadding: false, label: 'пр. о отчислении'},
    //{id: 'orderOut_tblFace_tblOrderId', disablePadding: false, label: 'id'},
];

const FacesAspirants = ({
                                  changeSelected = () => {
                                  },
                                  selected
                              }) => {
    const {
        facesAspirants: {
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
            FormEdit={FacesAspirantsEdit}
            //initialOrderBy='createdAt'
            onGetKeyValue={changeAcademicAdvisorIdHandle}
            currentRecInitial={selected}
            maxHeight={'600px'}
        />
    );
};

export default FacesAspirants;