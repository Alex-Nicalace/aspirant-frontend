import React from 'react';
import FaceNames from "../face-names";
import FaceDocuments from "../face-documents";
import FaceCitizenships from "../face-citizenships";
import FaceEducations from "../face-educations";
import FaceWorks from "../face-works";

const FaceAllData = ({faceId}) => {
    return (
        <div>
            <FaceNames faceId={faceId} />
            <FaceDocuments faceId={faceId}/>
            <FaceCitizenships faceId={faceId} />
            <FaceEducations faceId={faceId} />
            <FaceWorks faceId={faceId} />
        </div>
    );
};

export default FaceAllData;