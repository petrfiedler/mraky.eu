import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiAlertTriangle, FiChevronLeft } from "react-icons/fi";

const Error = () => {
    return (
        <Wrapper>
            <FiAlertTriangle className="triangle" />
            <h1>Stránka nenalezena.</h1>
            <Link to="/">
                <FiChevronLeft />
                Zpět na hlavní stránku
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(calc(100vh - 10vw) - 25rem);

    h1 {
        font-size: 3rem;
    }

    .triangle {
        color: var(--clr2);
        font-size: 5rem;
    }

    a {
        color: var(--clr2);
        padding: 1rem;
        font-size: 2rem;
        border: 3px solid var(--clr2);
        text-decoration: none;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        svg {
            margin-right: 1rem;
        }

        :hover {
            background-color: var(--clr2);
            color: var(--clr1);
        }
    }
`;

export default Error;
