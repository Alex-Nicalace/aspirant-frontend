import React, {useState} from 'react';
import DictDirection from "../dict-direction";
import DictDirectionality from "../dict-directionality";
import DictSpecialty from "../dict-specialty";
import Grid from "@material-ui/core/Grid";
import FrameWithTitle from "../frame-with-title";
import {FormControlLabel, Switch} from "@material-ui/core";

const DictDirectionalityAndSpecialty = ({
                                            changeSelected = () => {
                                            },
                                            selected,
                                            showSwitchDictDirection = false,
                                            showDictDirectionInit = true
                                        }) => {
    //console.log(changeSelected);
    const [showDictDirection, setShowDictDirection] = useState(showDictDirectionInit);

    const handleChangeShowDictDirection = (e) => {
        setShowDictDirection(e.target.checked);
    }

    const changeIdHandle = (id) => {
        changeSelected(id);
    }
    return (
        <div>
            {showSwitchDictDirection && <FormControlLabel
                control={
                    <Switch
                        checked={showDictDirection}
                        onChange={handleChangeShowDictDirection}
                    />
                }
                label='направления'
            />
            }
            <Grid
                container justifyContent='space-between'
                //style={{border:'1px solid red'}}
            >
                {
                    showDictDirection && <Grid item style={{flex: '1 1 50%'}}>
                        <FrameWithTitle head='направления'>
                            <DictDirection/>
                        </FrameWithTitle>
                    </Grid>
                }
                <Grid item style={{flex: '1 1 50%'}}>
                    <FrameWithTitle head='направленности'>
                        <DictDirectionality changeSelected={changeIdHandle} selected={selected}/>
                    </FrameWithTitle>
                </Grid>
                <Grid item style={{flex: '1 1 50%'}}>
                    <FrameWithTitle head='специальности'>
                        <DictSpecialty changeSelected={changeIdHandle} selected={selected}/>
                    </FrameWithTitle>
                </Grid>
            </Grid>
        </div>
    );
};

export default DictDirectionalityAndSpecialty;