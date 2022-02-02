import React from "react";
import styled from "styled-components";
import { capitalize } from "../utils/utilFunctions";

const Heading = ({ children }) => {
    return <Wrapper>{capitalize(children)}</Wrapper>;
};

const Wrapper = styled.h1`
    padding: 2rem 1rem;
    text-align: center;
    font-size: 2.5rem;
    position: relative;

    @media (max-width: 980px) {
        padding-top: 0;
    }

    :after {
        content: "";
        position: absolute;
        width: 10rem;
        height: 0.25rem;
        background-color: var(--clr2);
        bottom: 0px;
        left: 50%;
        margin-left: -5rem;
    }
`;

export default Heading;
