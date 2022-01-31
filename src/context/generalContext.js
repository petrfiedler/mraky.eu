import React, { useContext, useReducer } from "react";
import reducer from "../reducers/generalReducer";

const defaultState = {
    isSidebarShown: false,
    highlightedCard: "",
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

    const highlightCard = (card) => {
        dispatch({ type: "CARD_HIGHLIGHT", card: card });
    };

    const unhighlightCard = () => {
        dispatch({ type: "CARD_UNHIGHLIGHT" });
    };

    return (
        <GeneralContext.Provider
            value={{
                ...state,
                showSidebar,
                hideSidebar,
                highlightCard,
                unhighlightCard,
            }}>
            {children}
        </GeneralContext.Provider>
    );
};

export const useGeneralContext = () => {
    return useContext(GeneralContext);
};
