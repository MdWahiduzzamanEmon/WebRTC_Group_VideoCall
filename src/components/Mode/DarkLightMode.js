import React from 'react';
import DarkLightModeReducer, { TOGGLE_INITIAL_STATE } from './DarkLightModeReducer/DarkLightModeReducer';

const DarkLightMode = () => {
    const [ state, dispatch ] = React.useReducer(DarkLightModeReducer, TOGGLE_INITIAL_STATE);
    // console.log(TOGGLE_INITIAL_STATE)
    return {
        state,
        dispatch,
    }
};

export default DarkLightMode;