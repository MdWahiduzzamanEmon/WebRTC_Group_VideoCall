export const TOGGLE_INITIAL_STATE = {
    darkMode: "light",
}

const DarkLightModeReducer = (state = TOGGLE_INITIAL_STATE, action) => {
    switch (action.type) {
        case "DARK_MODE":
            return {
                ...state,
                darkMode: action.payload,
            }
        default:
            return state
    }
}

export default DarkLightModeReducer;