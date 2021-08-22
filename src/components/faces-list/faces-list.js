import React, {useEffect, useState} from 'react';
import TableEdit from "../table-edit";
import FacesEdit from "../faces-edit";
import Popover from "@material-ui/core/Popover";
import {Container} from "@material-ui/core";
import {FACES_LIST_ROUTE} from "../../utils/consts";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FaceAllDataChoiseView from "../face-all-data-choise-view";

const FacesList = ({
                       changeSelected = () => {
                       },
                       selected,
                       viewCardMode = 'popover'
                   }) => {
    //const history = useHistory();
    const {
        faces: {
            dataset, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();

    useEffect(() => {
        if (dataset.length === 0)
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
        {id: 'isAspirant', disablePadding: false, label: 'аспирант'},
        {id: 'isWasAspirant', disablePadding: false, label: 'быв. аспирант'},
        {id: 'isAcademicAdvisor', disablePadding: false, label: 'науч. рук.'},
    ];

    if (viewCardMode === 'popover')
        headCells[1].onClick = openPopoverHandler;
    if (viewCardMode === 'link') {
        headCells[1].linkArgument = 'id';
        headCells[1].link = `${FACES_LIST_ROUTE}`;
    }
    // headCells[2].onClick = openPopoverHandler;

    return (
        <>
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
            {/*<Button onClick={openPopoverHandler}>редактировать</Button>*/}
            {/*<Button onClick={() => history.push(`${FACES_LIST_ROUTE}${faceId}`)} >карточка</Button>*/}

            <Popover
                id={idPopover}
                open={isOpenPopover}
                //anchorEl={anchorEl}
                onClose={closePopoverHandler}
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
                    {/*<FaceAllData faceId={faceId} />*/}
                    <FaceAllDataChoiseView faceId={faceId}/>
                </Container>
            </Popover>
        </>

    );
};

export default FacesList;