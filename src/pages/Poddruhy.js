import React from "react";
import styled from "styled-components";
import categories from "../data/categories";
import { Cards } from "../components/";

const Poddruhy = () => {
    return (
        <Wrapper>
            <h1>Poddruhy oblaků</h1>
            <p>
                Mimo základní druhy oblaků určujeme i poddruhy oblaků, neboť ne
                každý oblak stejného druhu má shodný vzhled. Ty slouží jako
                přívlastky k základním druhům odvozené od mírných variací
                vzhledu a pomáhají nám lépe popsat různá oblaka.
            </p>
            <Cards
                cards={categories.filter((c) => c.id !== "druhy")}
                link={(id) => `/poddruhy/${id}`}
            />
        </Wrapper>
    );
};

const Wrapper = styled.article`
    margin: 3rem auto;
    width: min(980px, 95vw);

    h1 {
        padding: 2rem 1rem;
        text-align: center;
        font-size: 2.5rem;
        position: relative;
    }

    h1:after {
        content: "";
        position: absolute;
        width: 10rem;
        height: 0.25rem;
        background-color: var(--clr2);
        bottom: 0px;
        left: 50%;
        margin-left: -5rem;
    }

    p {
        margin: 0 2rem 3rem;
        font-size: 1.2rem;
        line-height: 2.4rem;
        color: hsl(var(--clr1-hue), 100%, 80%);

        @media (max-width: 980px) {
            font-size: 1rem;
            line-height: 2rem;
        }
    }
`;

export default Poddruhy;
