import React, {useState} from 'react';
import DictDirection from "../dict-direction";
import DictDirectionality from "../dict-directionality";
import DictSpecialty from "../dict-specialty";
import Grid from "@material-ui/core/Grid";
import FacesDataWrap from "../faces-data-wrap";
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
                        <FacesDataWrap head='направления'>
                            <DictDirection/>
                        </FacesDataWrap>
                    </Grid>
                }
                <Grid item style={{flex: '1 1 50%'}}>
                    <FacesDataWrap head='направленности'>
                        <DictDirectionality changeSelected={changeIdHandle} selected={selected}/>
                    </FacesDataWrap>
                </Grid>
                <Grid item style={{flex: '1 1 50%'}}>
                    <FacesDataWrap head='специальности'>
                        <DictSpecialty changeSelected={changeIdHandle} selected={selected}/>
                    </FacesDataWrap>
                </Grid>
            </Grid>
        </div>
    );
};

export default DictDirectionalityAndSpecialty;