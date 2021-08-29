import React from 'react';
import TableEdit from "../table-edit";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import FacesAspirantsEdit from "../faces-aspirants-edit";
import {ASPIRANTS_LIST_ROUTE} from "../../utils/consts";
import FrameWithTitle from "../frame-with-title";
import AspirantFindForm from "../UI/aspirant-find-form";

const headCells = [
    {id: 'id', disablePadding: false, key: true},
    {id: 'tblFaceId', disablePadding: false},
    {
        id: 'lastname',
        disablePadding: false,
        label: 'фамилия',
        link: `${ASPIRANTS_LIST_ROUTE}`,
        linkArgument: 'tblFaceId'
    },
    {id: 'firstname', disablePadding: false, label: 'имя'},
    {id: 'middleName', disablePadding: false, label: 'отчество'},
    {id: 'birthdate', disablePadding: false, label: 'дата рождения', dataType: 'date'},
    {id: 'sex', disablePadding: false, label: 'пол'},
    {id: 'id', disablePadding: false, key: true},
    {id: 'isRecommendation', disablePadding: false, label: 'реком. сов. фак.', padding: 'checkbox'},
    {id: 'isProtocol', disablePadding: false, label: 'выписка из протокола', padding: 'checkbox'},
    {id: 'isAgree', disablePadding: false, label: 'согласие на науч. рук.', padding: 'checkbox'},
    {id: 'isHeadDepartment', disablePadding: false, label: 'согласование зав. каф.', padding: 'checkbox'},
    {id: 'dateOn', disablePadding: false, label: 'зачислен', dataType: 'date'},
    {id: 'dateOff', disablePadding: false, label: 'отчислен', dataType: 'date'},
    {id: 'dissertationTheme', disablePadding: false, label: 'тема диссертации'},
    {id: 'educationForm', disablePadding: false, label: 'форма обучения'},
    {id: 'nameDirection', disablePadding: false, label: 'направление обучения'},
    {id: 'DirectionalityOrSpecialty', disablePadding: false, label: 'направленность/специальность'},
    {id: 'subDiv', disablePadding: false, label: 'кафедра'},
    {id: 'subject', disablePadding: false, label: 'ин. яз'},
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
        //setAcademicAdvisorId(id);
        changeSelected(id);
        // changeAcademicAdvisorId(id);
    }

    return (
        <FrameWithTitle head='Аспиранты'>
            <AspirantFindForm
                fetch={fetch}
            />
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
        </FrameWithTitle>
    );
};

export default FacesAspirants;