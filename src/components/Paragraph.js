import React from "react";
import styled from "styled-components";

const Paragraph = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
    margin: 5rem auto;
    width: min(40rem, 90%);
    line-height: 1.5;
    font-size: 1.25rem;
`;

export default Paragraph;
