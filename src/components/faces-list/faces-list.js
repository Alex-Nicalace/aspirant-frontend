import React, {useState} from 'react';
import TableEdit from "../table-edit";
import FacesEdit from "../faces-edit";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import {Container} from "@material-ui/core";
import FaceAllData from "../face-all-data";
import {useHistory} from "react-router-dom";
import {FACES_LIST_ROUTE} from "../../utils/consts";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'lastname', disablePadding: false, label: 'фамилия'},
    {id: 'firstname', disablePadding: false, label: 'имя'},
    {id: 'middleName', disablePadding: false, label: 'отчество'},
    {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
];

const FacesList = ({
                       changeSelected = () => {
                       },
                       selected
                   }) => {
    const history = useHistory();
    const {
        faces: {
            dataset, isLoading, error,
            fetch,
            deleteRec,
        },
    } = useAspirantApiContext();
    const [faceId, setFaceId] = useState(null);
    const [isOpenPopover, setIsOpenPopover] = useState(false);
    const idPopover = isOpenPopover ? 'simple-popover' : undefined;

    const changeFaceIdHandle = (id) => {
        //console.log(`comp - FacesList, id=${faceId}`);
        setFaceId(id);
        changeSelected(id) ;
    }

    const openPopoverHandler = () => {
        setIsOpenPopover(true);
    }

    const closePopoverHandler = () => {
        setIsOpenPopover(false);
    }

    return (
        <>
            <TableEdit
                headCells={headCells}
                isLoading={isLoading}
                dataset={dataset}
                error={error}
                deleteRec={deleteRec}
                fetch={fetch}
                FormEdit={FacesEdit}
                initialOrderBy='lastname'
                onGetKeyValue={changeFaceIdHandle}
                currentRecInitial={selected}
            />
            <Button onClick={openPopoverHandler}>редактировать</Button>
            <Button onClick={() => history.push(`${FACES_LIST_ROUTE}${faceId}`)} >карточка</Button>

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
                    <FaceAllData faceId={faceId} />
                </Container>
            </Popover>
        </>

    );
};

export default FacesList;