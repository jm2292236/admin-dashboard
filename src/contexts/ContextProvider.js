import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

// Customized hook
export const useStateContext = () => useContext(StateContext);
