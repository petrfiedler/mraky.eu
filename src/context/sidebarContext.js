import React, { useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";

const defaultState = {
    isSidebarShown: false,
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const showSidebar = () => {
        dispatch({ type: "SIDEBAR_SHOW" });
    };

    const hideSidebar = () => {
        dispatch({ type: "SIDEBAR_HIDE" });
    };

    return (
        <SidebarContext.Provider
            value={{
                ...state,
                showSidebar,
                hideSidebar,
            }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => {
    return useContext(SidebarContext);
};
