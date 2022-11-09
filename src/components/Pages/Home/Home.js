import { Box } from '@mui/material';
import React from 'react';
import DarkLightToggleIconComponent from './DarkLightToggleIconComponent/DarkLightToggleIconComponent';
import RoomCreate from './Room/RoomCreate';

const Home = () => {
    return (
        <Box>
            < DarkLightToggleIconComponent />
            <RoomCreate />
        </Box>
    );
};

export default Home;