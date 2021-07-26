import React from 'react';
import FaceNames from "../face-names";
import FaceDocuments from "../face-documents";
import FaceCitizenships from "../face-citizenships";
import FaceEducations from "../face-educations";
import FaceWorks from "../face-works";
import FaceResidences from "../face-residences";
import FaceContacts from "../face-contacts";
import FaceEntranceExamin from "../face-entrance-examin";

const FaceAllData = ({faceId}) => {
    return (
        <div>
            <FaceNames faceId={faceId} />
            <FaceDocuments faceId={faceId}/>
            <FaceCitizenships faceId={faceId} />
            <FaceEducations faceId={faceId} />
            <FaceWorks faceId={faceId} />
            <FaceResidences faceId={faceId} />
            <FaceContacts faceId={faceId} />
            <FaceEntranceExamin faceId={faceId} isCandidateMin={true} />
        </div>
    );
};

export default FaceAllData;