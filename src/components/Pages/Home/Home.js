import { Box } from '@mui/material';
import React, { createContext, useReducer } from 'react';
// import CallingRoom from './Room/CallingRoom/CallingRoom';
import RoomCreate from './Room/RoomCreate';
// import RoomCreate from './Room/RoomCreate';
import RoomReducer, { ROOM_INITIAL_STATE } from './Room/RoomReducer/RoomReducer';

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            minHeight: "calc(100vh - 64px)",
            height: "100%",
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <RoomProvider>
                <RoomCreate />
            </RoomProvider>
        </Box>
    );
};

export default Home;

const RoomProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RoomReducer, ROOM_INITIAL_STATE);

    return (
        <RoomContext.Provider value={{ state, dispatch }}>
            {children}
        </RoomContext.Provider>
    );

}

export const RoomContext = createContext();
