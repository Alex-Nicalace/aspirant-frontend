import React, {useEffect, useState} from 'react';
import FormButtons from "../form-buttons";

const FormFields = ({closeEdit, modeEdit, currentRec, data, children, recInit}) => {
    const {
        insertRec,
        updateRec,
        dataset
    } = data;
    const [rec, setRec] = useState(recInit);

    useEffect(() => {
        // чтобы в момоент редактирования в форме оказались редактируемые данные
        if (modeEdit === 'update') {
            const result = dataset.find(i => i.id === currentRec);
            result && setRec(result);
            return;
        }

        setRec(recInit);
    }, [modeEdit]);

    const changeValueHandle = ({target: {value, name}}) => {
        setRec((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    const saveChangesHandle = async (e) => {
        e.preventDefault();

        closeEdit();

        switch (modeEdit) {
            case 'insert':
                await insertRec({...rec});
                return
            case 'update':
                await updateRec({id: currentRec, ...rec});
                return
            default:
                return
        }
    }

    return (
        <FormButtons saveBtn={saveChangesHandle} closeEdit={closeEdit}>
            {React.Children.map(children, ((child, index) => {
                return React.cloneElement(child, {
                    ...child.props,
                    onChange: changeValueHandle,
                    value: rec[child.props.name]
                });
            }))
            }

            {/*<TextField*/}
            {/*    id="country"*/}
            {/*    label="страна"*/}
            {/*    required*/}
            {/*    type='search'*/}
            {/*    value={rec.country}*/}
            {/*    onChange={changeValueHandle}*/}
            {/*    fullWidth*/}
            {/*    name='country'*/}
            {/*/>*/}
        </FormButtons>
    );
};

export default FormFields;