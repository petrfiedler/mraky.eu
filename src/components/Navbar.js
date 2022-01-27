import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
    const { showSidebar } = useSidebarContext();

    return (
        <Wrapper>
            <h1>
                <Link to="/">Mraky</Link>
            </h1>
            <button onClick={showSidebar}>
                <FiMenu />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid hsl(0, 0%, var(--lightness10));

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        margin: 0;
    }

    button {
        border: none;
        background-color: transparent;
        color: inherit;
        font-size: 2rem;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    button > svg {
        transition: var(--transition1);
        border-radius: 100%;
        outline: 0rem solid hsla(0, 0%, var(--lightness2), 0%);
    }

    button:hover > svg {
        background-color: hsla(0, 0%, var(--lightness2), 50%);
        outline: 0.3rem solid hsla(0, 0%, var(--lightness2), 50%);
    }
`;

export default Navbar;
