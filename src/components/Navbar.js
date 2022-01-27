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
    border-bottom: 1px solid black;

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
        font-size: 2rem;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

export default Navbar;
