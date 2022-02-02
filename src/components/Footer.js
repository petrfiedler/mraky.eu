import React from "react";
import styled from "styled-components";
import cloudsDivider from "../assets/cloudsDivider.svg";

const Footer = () => {
    return (
        <Wrapper>
            <img src={cloudsDivider} alt="cloud divider" />
            <section>
                <ul>
                    <li>&copy;&nbsp;{new Date().getFullYear()} Petr Fiedler</li>
                    <li>
                        obrázky:{" "}
                        <a
                            href="https://whatsthiscloud.com/"
                            target="_blank"
                            rel="noreferrer">
                            whatsthiscloud
                        </a>
                    </li>
                </ul>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    display: grid;
    margin-top: auto;
    img {
        height: 10vw;
        width: 100%;
        margin-top: 2rem;
    }
    section {
        background-color: white;
        display: flex;
        justify-content: center;

        ul {
            color: black;
            font-size: 1.5rem;
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
                margin: 1rem;
                a {
                    color: var(--clr2);
                }
            }
        }
    }
`;

export default Footer;
