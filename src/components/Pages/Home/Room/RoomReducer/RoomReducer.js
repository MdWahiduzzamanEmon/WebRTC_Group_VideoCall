export const ROOM_INITIAL_STATE = {
    roomName: "",
    userName: "",
    error: {
        roomName: "",
        userName: "",
    }
};

const RoomReducer = (state = ROOM_INITIAL_STATE, action) => {
    switch (action.type) {
        case "ROOM_NAME":
            return {
                ...state,
                roomName: action.payload,
            }
        case "ERROR":
            return {
                ...state,
                error: {
                    ...state.error,
                    roomName: action.payload.roomName,
                    userName: action.payload.userName,
                }
            }
        case "USER_NAME":
            return {
                ...state,
                userName: action.payload,
            }
        default:
            return state;
    }
}

export default RoomReducer;