import { Box } from '@mui/material';
import React from 'react';
import { CButton, CInput } from '../../../Utility';

const RoomCreate = () => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                height: '100%',
                //border with mui color
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                margin: 'auto',
                mt: 2,
                p: 2
            }}>

                <CInput
                    type="text"
                    label="Room Name/ID"
                    placeholder="Room Name/ID"
                />

                <CButton
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                    btnTitle="Create Room"
                    type="submit"
                    
                />

            </Box>
        </form>
    );
};

export default RoomCreate;