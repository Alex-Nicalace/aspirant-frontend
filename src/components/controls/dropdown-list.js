import React from 'react';
import {Controller} from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select  from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const DropdownList = ({control, name, defaultValue, rules, renderItem, label, helperText, ...props}) => {
    return (
        <FormControl
            {...props}
        >
            <InputLabel id={`input-label-id-${name}`}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{...rules}}
                render={({field}) => (
                    <Select
                        labelId={`input-label-id-${name}`}
                        id={`select-id-${name}`}
                        {...field}
                    >
                        {renderItem}
                    </Select>
                )}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};

export default DropdownList;