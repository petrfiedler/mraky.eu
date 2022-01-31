const generalReducer = (state, action) => {
    if (action.type === "SIDEBAR_SHOW") {
        return { ...state, isSidebarShown: true };
    }
    if (action.type === "SIDEBAR_HIDE") {
        return { ...state, isSidebarShown: false };
    }
    if (action.type === "CARD_HIGHLIGHT") {
        return { ...state, highlightedCard: action.card };
    }
    if (action.type === "CARD_UNHIGHLIGHT") {
        return { ...state, highlightedCard: "" };
    }
};

export default generalReducer;
