import React from 'react';
import DarkLightMode from '../../Mode/DarkLightMode';

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const darkLightMode = DarkLightMode()
    return (
        <AuthContext.Provider value={{ 
            darkLightMode
         }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;