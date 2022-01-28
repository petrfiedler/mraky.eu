import React from "react";
import styled from "styled-components";
import heroImg from "../assets/homeHero.JPG";
import { Categories } from "../components";

const Home = () => {
    return (
        <Wrapper>
            <header>
                <h1>Naučte se identifikovat oblaky.</h1>
            </header>
            <Categories />
        </Wrapper>
    );
};

const Wrapper = styled.main`
    margin: 0;
    header {
        background-image: url(${heroImg});
        background-size: max(1920px, 100vw);
        background-repeat: no-repeat;
        background-position: top right;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 3rem;
            line-height: 1.5;
            padding: 3rem;
        }
    }
`;

export default Home;
