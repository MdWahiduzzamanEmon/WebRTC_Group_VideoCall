// import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UseAuth from '../Context/UseAuth/UseAuth';
import { Box } from '@mui/material';
import DarkLightToggleIconComponent from '../Pages/Home/DarkLightToggleIconComponent/DarkLightToggleIconComponent';
import CallingRoom from '../Pages/Home/Room/CallingRoom/CallingRoom';
import UsersGroupVideo from '../Pages/Home/Room/CallingRoom/UsersGroupVideo/UsersGroupVideo';
import RoomCreate from '../Pages/Home/Room/RoomCreate';

const Routing = () => {
    const { darkLightMode } = UseAuth();
    const { state, dispatch } = darkLightMode;
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

    React.useEffect(() => {
        const mode = localStorage.getItem('mode');
        if (mode) {
            dispatch({ type: 'DARK_MODE', payload: mode });
        } else {
            dispatch({ type: 'DARK_MODE', payload: 'light' });
        }
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                // height: 'calc(100vh - 30px)',
            }}>
                <nav>
                    <DarkLightToggleIconComponent />
                </nav>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/room/:roomID" element={<CallingRoom />} />
                        {/* <Route path="/room/:roomID" element={<UsersGroupVideo />} /> */}
                        <Route path="*" element={<h1>404 Not Found</h1>} />

                    </Routes>
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
};

export default Routing;