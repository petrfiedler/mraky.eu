import React, { useContext, useReducer } from "react";
import reducer from "../reducers/generalReducer";

const defaultState = {
    isSidebarShown: false,
};

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const showSidebar = () => {
        dispatch({ type: "SIDEBAR_SHOW" });
    };

    const hideSidebar = () => {
        dispatch({ type: "SIDEBAR_HIDE" });
    };

    return (
        <GeneralContext.Provider
            value={{
                ...state,
                showSidebar,
                hideSidebar,
            }}>
            {children}
        </GeneralContext.Provider>
    );
};

export const useGeneralContext = () => {
    return useContext(GeneralContext);
};
