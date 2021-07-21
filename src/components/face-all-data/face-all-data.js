import React from 'react';
import FaceNames from "../face-names";
import FaceDocuments from "../face-documents";
import FaceCitizenships from "../face-citizenships";

const FaceAllData = ({faceId}) => {
    return (
        <div>
            <FaceNames faceId={faceId} />
            <FaceDocuments faceId={faceId}/>
            <FaceCitizenships faceId={faceId} />
        </div>
    );
};

export default FaceAllData;