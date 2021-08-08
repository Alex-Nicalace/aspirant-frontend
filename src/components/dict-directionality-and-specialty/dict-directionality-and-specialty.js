import React from 'react';
import DictDirection from "../dict-direction";
import DictDirectionality from "../dict-directionality";
import DictSpecialty from "../dict-specialty";

const DictDirectionalityAndSpecialty = () => {
    return (
        <div>
            <DictDirection />
            <DictDirectionality />
            <DictSpecialty />
        </div>
    );
};

export default DictDirectionalityAndSpecialty;