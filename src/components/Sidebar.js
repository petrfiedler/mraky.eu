import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebarContext";
import { navLinks } from "../constants/navLinks";

const Sidebar = () => {
    const { hideSidebar, isSidebarShown } = useSidebarContext();
    return (
        <Wrapper>
            <aside className={`${isSidebarShown ? "shown" : "hidden"}`}>
                <header>
                    <h1>
                        <Link to="/" onClick={hideSidebar}>
                            Mraky
                        </Link>
                    </h1>
                    <button onClick={hideSidebar}>
                        <FiX />
                    </button>
                </header>
                <ul>
                    {navLinks.map((navLink) => {
                        return (
                            <li key={navLink.id}>
                                <Link to={navLink.to} onClick={hideSidebar}>
                                    {navLink.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    aside {
        position: fixed;
        background-color: hsl(0, 0%, var(--lightness10));
        color: hsl(0, 0%, var(--lightness0));
        width: 100%;
        height: 100%;
        transition: var(--transition3);
        transform-origin: top right;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;

        @media (min-width: 980px) {
            display: none;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: min(100vw, 980px);

            h1 {
                margin: 0;
                margin-left: 1.5rem;
                font-size: 2.5rem;
            }

            button {
                border: none;
                background-color: transparent;
                color: inherit;
                font-size: 2.5rem;
                margin: 1.5rem;
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
                background-color: hsla(0, 0%, var(--lightness8), 50%);
                outline: 0.3rem solid hsla(0, 0%, var(--lightness8), 50%);
            }
        }

        ul {
            list-style: none;
            line-height: 2;
            margin: 0;
            margin-top: min(6rem, 0vh);
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50%;

            li {
                font-size: 2rem;
                font-weight: bold;
                a:hover {
                    color: var(--clr2);
                }
            }
        }
    }
    .shown {
        opacity: 1;
        transform: translateX(0%);
        transform-origin: bottom left;
    }
    .hidden {
        opacity: 1;
        transform: translateX(50%);
        transform: rotate(-90deg);
        button > svg {
            transform: rotate(90deg);
        }
    }
`;

export default Sidebar;
