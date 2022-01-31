const generalReducer = (state, action) => {
    if (action.type === "SIDEBAR_SHOW") {
        return { ...state, isSidebarShown: true };
    }
    if (action.type === "SIDEBAR_HIDE") {
        return { ...state, isSidebarShown: false };
    }
};

export default generalReducer;
