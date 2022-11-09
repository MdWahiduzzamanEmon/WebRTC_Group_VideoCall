import { TextField } from '@mui/material';
import React from 'react';

const Input = ({...rest}) => {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size='small'
            {...rest}
        />
    );
};

export default Input;