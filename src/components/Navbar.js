import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { useGeneralContext } from "../context/generalContext";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
    const { showSidebar } = useGeneralContext();

    return (
        <Wrapper>
            <div>
                <h1>
                    <Link to="/">Mraky</Link>
                </h1>
                <button onClick={showSidebar}>
                    <FiMenu />
                </button>
                <ul>
                    {navLinks.map((navLink) => {
                        return (
                            <li key={navLink.id}>
                                <Link to={navLink.to}>{navLink.label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;

    div {
        width: 980px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;

        a {
            text-decoration: none;
            color: inherit;
        }

        h1 {
            margin: 0;
            font-size: 2.5rem;
            margin: 1.5rem 0;
        }

        button {
            border: none;
            background-color: transparent;
            color: inherit;
            font-size: 2.5rem;
            margin: 1.5rem 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            @media (min-width: 980px) {
                display: none;
            }
        }

        button > svg {
            transition: var(--transition1);
            border-radius: 100%;
            outline: 0rem solid hsla(0, 0%, var(--lightness2), 0%);
        }

        button:hover > svg,
        button:focus > svg {
            background-color: hsla(0, 0%, var(--lightness2), 50%);
            outline: 0.3rem solid hsla(0, 0%, var(--lightness2), 50%);
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: none;
            @media (min-width: 980px) {
                display: flex;
            }

            li {
                margin: 1.5rem;
                font-size: 2rem;
                font-weight: bold;
                a:hover,
                a:focus {
                    color: var(--clr2);
                    outline: none;
                }
            }
        }
    }
`;

export default Navbar;
