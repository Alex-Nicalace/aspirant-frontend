import React from 'react';
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

const Input = ({control, name, defaultValue, rules, ...props}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{...rules}}
            render={({field}) => (
                <TextField
                    {...props}
                    {...field}
                    onChange={(e) => {
                        props.onChange && props.onChange(e);
                        field.onChange(e);
                    }}
                />
            )}
        />
    );
};

export default Input;