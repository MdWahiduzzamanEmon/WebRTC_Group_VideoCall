import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import UseAuth from '../../../Context/UseAuth/UseAuth';

const DarkLightToggleIconComponent = () => {
    const themes = useTheme();
    const { darkLightMode } = UseAuth();
    const { state, dispatch } = darkLightMode;
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                const mode = state?.darkMode === 'light' ? 'dark' : 'light';
                dispatch({ type: 'DARK_MODE', payload: mode });
                localStorage.setItem('mode', mode);
            },
        }),
        [dispatch, state?.darkMode],
    );
    // console.log(theme);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            {/* {themes.palette.mode} mode */}
            <IconButton sx={{ ml: 1 }} onClick={
                () => {
                    colorMode.toggleColorMode();

                }
            } color="inherit">
                {themes.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        </Box>
    );
};

export default DarkLightToggleIconComponent;