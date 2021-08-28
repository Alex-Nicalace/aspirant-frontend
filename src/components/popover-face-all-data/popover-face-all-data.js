import React from 'react';
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import FaceAllDataChoiseView from "../face-all-data-choise-view";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    popupContent: {
        margin: theme.spacing(2)
    },
}));

const PopoverFaceAllData = ({idPopover, isOpenPopover, closePopoverHandler, faceId}) => {
    const classes = useStyles();
    if (!faceId)
        return null;
    return (
        <Popover
            id={idPopover}
            open={isOpenPopover}
            //anchorEl={anchorEl}
            onClose={closePopoverHandler}
            // anchorOrigin={{
            //     vertical: 'center',
            //     horizontal: 'center',
            // }}
            // transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'center',
            // }}
        >
            <div className={classes.popupContent}>
                <div align='right'>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={closePopoverHandler}
                    >закрыть
                    </Button>
                </div>

                {/*<FaceAllData faceId={faceId} />*/}
                <FaceAllDataChoiseView faceId={faceId}/>
            </div>
        </Popover>
    );
};

export default PopoverFaceAllData;