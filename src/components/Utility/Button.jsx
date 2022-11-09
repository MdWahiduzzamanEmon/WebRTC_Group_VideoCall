import React from 'react';
import Button from '@mui/material/Button';

const CButton = ({btnTitle,...rest}) => {
    return (
        <Button
            size="small"
            variant="contained"
            id="btn"
            {...rest}>
				{btnTitle}
			</Button>
		);
};

export default CButton;