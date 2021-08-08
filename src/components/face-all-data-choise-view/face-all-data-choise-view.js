import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import {FormLabel} from "@material-ui/core";
import FaceAllData from "../face-all-data";
import FaceAllDataTabs from "../face-all-data-tabs";

const FaceAllDataChoiseView = ({faceId}) => {
    const [modeView, setModeView] = useState('tabs');

    const handleChangeModeView = (e) => {
        setModeView(e.target.value);
    }

    return (
        <div>
            <FormControl component='fieldset' >
                <FormLabel component='legend' >
                    Вид данных
                    <RadioGroup
                        row
                        value={modeView}
                        name='modeView'
                        onChange={handleChangeModeView}
                        aria-label='Вид отображения данных'
                    >
                        <FormControlLabel
                            control={<Radio/>}
                            label='все данные сразу'
                            value='all'
                        />
                        <FormControlLabel
                            control={<Radio/>}
                            label='по вкладкам'
                            value='tabs'
                        />

                    </RadioGroup>
                </FormLabel>
            </FormControl>
            {modeView === 'all' && <FaceAllData faceId={faceId} />}
            {modeView === 'tabs' && <FaceAllDataTabs faceId={faceId} />}

        </div>
    );
};

export default FaceAllDataChoiseView;