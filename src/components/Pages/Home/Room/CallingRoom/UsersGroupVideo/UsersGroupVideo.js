import { Badge, Button, IconButton } from '@mui/material';
import React from 'react';
import { Modal, Row } from 'react-bootstrap';
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare'
import ChatIcon from '@material-ui/icons/Chat'
import CallEndIcon from '@material-ui/icons/CallEnd'
import '../Video.css';
import Input from '../../../../../Utility/Input';
import { useLocation } from 'react-router-dom';

const UsersGroupVideo = () => {
    const location = useLocation();

    // const { video, audio, screen, newmessages, showModal, closeChat, handleVideo, handleEndCall, handleAudio, handleScreen, openChat, messages, sendMessage, copyUrl, localVideoref } = location?.state;
    console.log(location?.state);
    return (
        <div>
            {/* <div style={{
                display: "flex",
                flexDirection: "row", justifyContent: "center", alignItems: "center",
            }}>
                <div>
                    <div className="btn-down" style={{ backgroundColor: "whitesmoke", color: "whitesmoke", textAlign: "center" }}>
                        <IconButton style={{ color: "#424242" }} onClick={this.handleVideo}>
                            {(this.state.video === true) ? <VideocamIcon /> : <VideocamOffIcon />}
                        </IconButton>

                        <IconButton style={{ color: "#f44336" }} onClick={this.handleEndCall}>
                            <CallEndIcon />
                        </IconButton>

                        <IconButton style={{ color: "#424242" }} onClick={this.handleAudio}>
                            {this.state.audio === true ? <MicIcon /> : <MicOffIcon />}
                        </IconButton>

                        {this.state.screenAvailable === true ?
                            <IconButton style={{ color: "#424242" }} onClick={this.handleScreen}>
                                {this.state.screen === true ? <ScreenShareIcon /> : <StopScreenShareIcon />}
                            </IconButton>
                            : null}

                        <Badge badgeContent={this.state.newmessages} max={999} color="secondary" onClick={this.openChat}>
                            <IconButton style={{ color: "#424242" }} onClick={this.openChat}>
                                <ChatIcon />
                            </IconButton>
                        </Badge>
                    </div>

                    <Modal show={this.state.showModal} onHide={this.closeChat} style={{ zIndex: "999999" }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Chat Room</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ overflow: "auto", overflowY: "auto", height: "400px", textAlign: "left" }} >
                            {this.state.messages.length > 0 ? this.state.messages.map((item, index) => (
                                <div key={index} style={{ textAlign: "left" }}>
                                    <p style={{ wordBreak: "break-all" }}><b>{item.sender}</b>: {item.data}</p>
                                </div>
                            )) : <p>No message yet</p>}
                        </Modal.Body>
                        <Modal.Footer className="div-send-msg">
                            <Input placeholder="Message" value={this.state.message} onChange={e => this.handleMessage(e)} />
                            <Button variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="container">
                        <div style={{ paddingTop: "20px" }}>
                            <Input value={window.location.href} disable="true"></Input>
                            <Button style={{
                                backgroundColor: "#3f51b5", color: "whitesmoke", marginLeft: "20px",
                                marginTop: "10px", width: "120px", fontSize: "10px"
                            }} onClick={this.copyUrl}>Copy invite link</Button>
                        </div>

                        <Row id="main" className="flex-container" style={{ margin: 0, padding: 0 }}>
                            <video id="my-video" ref={this.localVideoref} autoPlay muted style={{
                                borderStyle: "solid", borderColor: "#bdbdbd", margin: "10px", objectFit: "fill",
                                width: "100%", height: "100%"
                            }}></video>
                        </Row>

                    </div>
                </div>
                <div>
                    {
                        // username list 

                        this.state?.userList?.length > 0 ?
                            <div className="user-list">
                                <h3>Users</h3>
                                <ul>
                                    {
                                        Object.keys(this.state.userList).map((key, index) => {
                                            return (
                                                <li key={index} onClick={() => this.handleUserClick(key)}>
                                                    {this.state.userList[key]}
                                                </li>
                                            )
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                            : null
                    }
                </div>
            </div> */}
        </div>
    );
};

export default UsersGroupVideo;