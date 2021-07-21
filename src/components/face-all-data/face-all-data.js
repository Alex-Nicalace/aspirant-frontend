import React from 'react';
import FaceNames from "../face-names";
import FaceDocuments from "../face-documents";

const FaceAllData = ({faceId}) => {
    return (
        <div>
            <FaceNames faceId={faceId} />
            <FaceDocuments faceId={faceId}/>
        </div>
    );
};

export default FaceAllData;