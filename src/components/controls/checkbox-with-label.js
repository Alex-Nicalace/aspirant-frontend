import React from 'react';
import {FormControlLabel} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import {Controller} from "react-hook-form";

const CheckboxWithLabel = ({
                               control,
                               name,
                               defaultValue,
                               rules,
                               label,
                               labelPlacement = 'end',
                               helperText,
                               ...props
                           }) => {
    return (
        <FormControlLabel
            label={label}
            labelPlacement={labelPlacement}
            control={
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={{...rules}}
                    render={({field}) => (
                        <Checkbox
                            // color='primary'
                            inputProps={{'aria-label': 'primary checkbox'}}
                            {...props}
                            {...field}
                            checked={field.value}
                            onChange={(e) => {
                                props.onChange && props.onChange(e);
                                field.onChange(e);
                            }}

                        />
                    )}
                />
            }
        >
        </FormControlLabel>
    );
};

export default CheckboxWithLabel;