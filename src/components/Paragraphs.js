import React from "react";

const Paragraphs = ({ text }) => {
    return (
        <>
            {text.map((paragraph, index) => (
                <p key="index">{paragraph}</p>
            ))}
        </>
    );
};

export default Paragraphs;
