export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};
