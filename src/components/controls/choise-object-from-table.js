import React from 'react';
import {Controller} from "react-hook-form";
import Box from "@material-ui/core/Box";
import FacesList from "../faces-list";
import Typography from "@material-ui/core/Typography";

const ChoiseObjectFromTable = ({
                                 control,
                                 name,
                                 defaultValue,
                                 rules,
                                 error,
                                 label,
                                 helperText,
                                 ComponentX,
                                 ...props
                             }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{...rules}}
            render={({field}) => (
                <>
                    <Box borderColor={error ? 'red' : 'grey.500'} border={1} borderRadius={10}>
                        <Typography
                            align='center'
                            color={error ? 'error' : 'textPrimary'}
                            variant='h6'
                        >
                            {label}
                        </Typography>
                        <ComponentX
                            changeSelected={(e) => {
                                props.onChange && props.onChange(e);
                                field.onChange(e);
                            }}
                            selected={field.value}
                        />
                    </Box>
                    <Typography
                        variant='caption'
                        color={error ? 'error' : 'textPrimary'}
                    >
                        {helperText}
                    </Typography>
                </>
            )}
        />
    );
};

export default ChoiseObjectFromTable;