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
import FrameWithTitle from "../frame-with-title";
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
            <FrameWithTitle head='хронология ФИО'>
                <FaceNames faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='документы' >
                <FaceDocuments faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='гражданство'>
                <FaceCitizenships faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='образование'>
                <FaceEducations faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='трудовая деятельность'>
                <FaceWorks faceId={faceId} />
            </FrameWithTitle>
            <FrameWithTitle head='проживание'>
                <FaceResidences faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='контакты'>
                <FaceContacts faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='кандидатский минимум'>
                <FaceEntranceExamin faceId={faceId} isCandidateMin={true}/>
            </FrameWithTitle>
            {/*<FaceEntranceExamin faceId={faceId} isCandidateMin={false} /> тот же стейт перзатирает предыдущий*/}
            <FrameWithTitle head='научные публикации'>
                <FaceScientificPubl faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='коммандировки'>
                <FaceBusinessTrip faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='экзамены'>
                <FaceExaminations faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='аттестация'>
                <FaceCertificationResult faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='фигурирует в приказах'>
                <FaceOrders faceId={faceId}/>
            </FrameWithTitle>
            <FrameWithTitle head='аспирант'>
                <FaceAspirant faceId={faceId}/>
            </FrameWithTitle>
        </div>
    );
};

export default FaceAllData;