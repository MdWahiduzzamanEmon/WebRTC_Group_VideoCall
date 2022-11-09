// import { Box } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UseAuth from '../Context/UseAuth/UseAuth';
import { Box } from '@mui/material';

const Routing = () => {
    const { darkLightMode } = UseAuth();
    const { state } = darkLightMode;
    // console.log(state);
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: state?.darkMode,
                },
            }),
        [state?.darkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                minHeight: "calc(100vh - 64px)",
                p: 2

            }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default Routing;