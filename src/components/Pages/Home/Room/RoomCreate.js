import { Box, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { CButton, CInput } from '../../../Utility';
import { RoomContext } from '../Home';

const RoomCreate = () => {
    const { state, dispatch } = React.useContext(RoomContext);
    const navigate = useNavigate();
    const handleJoinRoom = () => {
        // console.log('join room');
        if (state?.roomName === '') {
            return dispatch({
                type: 'ERROR', payload: {
                    roomName: 'Room name is required',
                }
            });
        }
        if (state?.userName === '') {
            return dispatch({
                type: 'ERROR', payload: {
                    userName: 'User name is required',
                }
            });
        }
        //add search params
        localStorage.setItem('username', state?.userName);
      window.location.href = `/room/${state?.roomName}`;
    }

    //styling
    const styleBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        margin: 'auto',
        mt: 2,
        p: 2
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleJoinRoom();
        }}>
            <Stack
                spacing={1}
                sx={styleBox}
            >
                <CInput
                    type="text"
                    label="Room Name/ID"
                    placeholder="Room Name/ID"
                    onChange={(e) => {

                        //paasing value to reducer
                        dispatch({ type: 'ROOM_NAME', payload: e.target.value });

                        //clearing error
                        dispatch({ type: 'ERROR', payload: { roomName: '' } });
                    }}
                    error={state?.error?.roomName ? true : false}
                    helperText={state?.error?.roomName}
                    value={state?.roomName}

                />
                <CInput
                    type="text"
                    label="Your Name"
                    placeholder="Your Name"
                    onChange={(e) => {
                        //paasing value to reducer
                        dispatch({ type: 'USER_NAME', payload: e.target.value });

                        //clearing error
                        dispatch({ type: 'ERROR', payload: { userName: '' } });
                    }}
                    error={state?.error?.userName ? true : false}
                    helperText={state?.error?.userName}
                    value={state?.userName}

                />

                <CButton
                    variant="contained"
                    color="info"
                    sx={{ mt: 2 }}
                    btnTitle="Join"
                    type="submit"
                />
                <small>or</small>
                {/* join room with random id  */}
                <CButton
                    variant="outlined"
                    color="primary"
                    btnTitle="Generate Random ID"
                    onClick={() => {
                        dispatch({ type: 'ROOM_NAME', payload: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
                        dispatch({ type: 'ERROR', payload: '' });
                    }}
                />

            </Stack>
        </form>
    );
};

export default RoomCreate;

{/* <Grid
    container
    spacing={3}
    justifyContent="center"
    alignItems="center"
    display="flex"
    mt={3}
>
    <Grid item xs={12} sm={6}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
        {/* <TextField
                                        id="outlined-basic"
                                        label="Enter your name"
                                        variant="outlined"
                                        value={this.state.username}
                                        onChange={this.handleUsername}
                                        fullWidth
                                    />
                                    <br />
                                    <Button variant="contained"
                                        color="primary"
                                        onClick={this.connect}
                                        style={{ marginTop: "5px" }}
                                    >
                                        Join
                                    </Button> */}
//         <RoomCreate
//             username={this.state.username}
//             handleUsername={this.handleUsername}
//             connect={this.connect}
//         />
//     </Grid>
//     <Grid item xs={12} sm={6} sx={{
//         position: "relative",
//         top: "0",
//         left: "0",
//         right: "0",
//         bottom: "0",
//         margin: "auto",
//         display: "block",
//     }}>
//         <video
//             id="my-video"
//             //loading sow video
//             ref={this.localVideoref ? this.localVideoref : null}
//             autoPlay
//             muted
//             style={{
//                 borderStyle: "solid",
//                 borderColor: "#bdbdbd",
//                 objectFit: "fill",
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "10px",
//                 boxShadow: "0px 0px 5px 0px #000000",
//                 transform: "rotateY(180deg)"

//             }}
//         />
//         <div style={{
//             backgroundColor: "transparent",
//             color: "whitesmoke",
//             textAlign: "center",
//             position: "absolute",
//             top: "93%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: "1",

//             width: "100%",
//             height: "auto",
//             // padding: "10px"
//         }}>
//             <Fab onClick={this.handleEndCall}
//                 variant="contained" color="error"
//             >
//                 <CallEndIcon />
//             </Fab>
//         </div>
//     </Grid>

// </Grid>

                        // </> */}