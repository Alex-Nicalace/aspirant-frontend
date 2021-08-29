import React, {useEffect, useState} from 'react';
import TableEdit from "../table-edit";
import FacesEdit from "../faces-edit";
import {FACES_LIST_ROUTE} from "../../utils/consts";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import PopoverFaceAllData from "../popover-face-all-data";
import FrameWithTitle from "../frame-with-title";
import FaceFindForm from "../UI/face-find-form";

const FacesList = ({
                       changeSelected = () => {
                       },
                       selected,
                       viewCardMode = 'popover'
                   }) => {
    const {
        faces: {
            dataset, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();

    useEffect(() => {
        //if (dataset.length === 0)
        fetch();
    }, [])

    const [faceId, setFaceId] = useState(null);
    const [isOpenPopover, setIsOpenPopover] = useState(false);
    const idPopover = isOpenPopover ? 'simple-popover' : undefined;

    const changeFaceIdHandle = (id) => {
        setFaceId(id);
        changeSelected(id);
    }

    const openPopoverHandler = () => {
        setIsOpenPopover(true);
    }

    const closePopoverHandler = () => {
        setIsOpenPopover(false);
    }

    const headCells = [
        {id: 'id', disablePadding: false, key: true},
        {id: 'lastname', disablePadding: false, label: 'фамилия'},
        {id: 'firstname', disablePadding: false, label: 'имя'},
        {id: 'middleName', disablePadding: false, label: 'отчество'},
        {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
        {id: 'sexStr', disablePadding: false, label: 'пол'},
        {id: 'isAspirant', disablePadding: false, label: 'аспирант', padding: 'checkbox'},
        {id: 'isWasAspirant', disablePadding: false, label: 'быв. аспирант', padding: 'checkbox'},
        {id: 'isAcademicAdvisor', disablePadding: false, label: 'науч. рук.', padding: 'checkbox'},
    ];

    if (viewCardMode === 'popover') {
        headCells[1].onClick = openPopoverHandler;
        headCells[1].style = {color: 'blue', textDecoration: 'underline'};
    }
    if (viewCardMode === 'link') {
        headCells[1].linkArgument = 'id';
        headCells[1].link = `${FACES_LIST_ROUTE}`;
    }
    // headCells[2].onClick = openPopoverHandler;

    return (
        <FrameWithTitle head='Лица, имеющиеся в базе данных'>
            <FaceFindForm
                fetch={fetch}
            />
            <TableEdit
                headCells={headCells}
                isLoading={isLoading}
                dataset={dataset}
                error={error}
                deleteRec={deleteRec}
                //fetch={fetchTst}
                FormEdit={FacesEdit}
                initialOrderBy='lastname'
                onGetKeyValue={changeFaceIdHandle}
                currentRecInitial={selected}
            />

            <PopoverFaceAllData
                faceId={faceId}
                closePopoverHandler={closePopoverHandler}
                idPopover={idPopover}
                isOpenPopover={isOpenPopover}
            />
        </FrameWithTitle>
    );
};

export default FacesList;