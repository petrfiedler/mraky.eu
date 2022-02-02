import React from "react";
import styled from "styled-components";

const Description = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
    margin: 0 2rem 3rem;
    font-size: 1.2rem;
    line-height: 2.4rem;
    color: hsl(var(--clr1-hue), 100%, 80%);

    @media (max-width: 980px) {
        font-size: 1rem;
        line-height: 2rem;
    }
`;

export default Description;
