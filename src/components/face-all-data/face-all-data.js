import React, {useEffect} from 'react';
import FaceNames from "../face-names";
import FaceDocuments from "../face-documents";
import FaceCitizenships from "../face-citizenships";
import FaceEducations from "../face-educations";
import FaceWorks from "../face-works";
import FaceResidences from "../face-residences";
import FaceContacts from "../face-contacts";
import FaceEntranceExamin from "../face-entrance-examin";
import FaceScientificPubl from "../face-scientific-publ";
import FaceBusinessTrip from "../face-business-trip";
import FaceExaminations from "../face-examinations";
import FaceCertificationResult from "../face-certification-result";
import FacesDataWrap from "../faces-data-wrap";
import {useAspirantApiContext} from "../context/aspirant-api-context/aspirant-api-context";
import Typography from "@material-ui/core/Typography";
import FaceOrders from "../face-orders";
import FaceAspirant from "../face-aspirant";

const FaceAllData = ({faceId}) => {
    const {faces: {dataset, fetchOne}} = useAspirantApiContext();

    const face = dataset.find(i => +i.id === +faceId);

    useEffect(() => {
        if (!face)
            fetchOne(faceId);
    }, [face, faceId])

    return (
        <div>
            <Typography align='center' variant='h5' color='textPrimary' gutterBottom>
                {face && `${face.lastname} ${face.firstname} ${face.middleName}, ${new Date(face.birthdate).toLocaleDateString()} г.р.`}
            </Typography >
            <FacesDataWrap head='хронология ФИО'>
                <FaceNames faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='документы' >
                <FaceDocuments faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='гражданство'>
                <FaceCitizenships faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='образование'>
                <FaceEducations faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='трудовая деятельность'>
                <FaceWorks faceId={faceId} />
            </FacesDataWrap>
            <FacesDataWrap head='проживание'>
                <FaceResidences faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='контакты'>
                <FaceContacts faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='кандидатский минимум'>
                <FaceEntranceExamin faceId={faceId} isCandidateMin={true}/>
            </FacesDataWrap>
            {/*<FaceEntranceExamin faceId={faceId} isCandidateMin={false} /> тот же стейт перзатирает предыдущий*/}
            <FacesDataWrap head='научные публикации'>
                <FaceScientificPubl faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='коммандировки'>
                <FaceBusinessTrip faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='экзамены'>
                <FaceExaminations faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='аттестация'>
                <FaceCertificationResult faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='фигурирует в приказах'>
                <FaceOrders faceId={faceId}/>
            </FacesDataWrap>
            <FacesDataWrap head='аспирант'>
                <FaceAspirant faceId={faceId}/>
            </FacesDataWrap>
        </div>
    );
};

export default FaceAllData;