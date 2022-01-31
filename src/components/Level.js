import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../context/generalContext";

const Level = ({ types }) => {
    const { highlightedCard, highlightCard, unhighlightCard } =
        useGeneralContext();
    return (
        <Wrapper>
            {types.map((type) => {
                return (
                    <Link
                        to={`/druhy/${type.id}`}
                        key={type.id}
                        onMouseOver={() => highlightCard(type.id)}
                        onMouseLeave={() => unhighlightCard()}
                        onFocus={() => highlightCard(type.id)}
                        onBlur={() => unhighlightCard()}
                        onClick={() => unhighlightCard()}
                        className={
                            type.id === highlightedCard
                                ? "highlight"
                                : highlightedCard !== ""
                                ? "dim"
                                : ""
                        }>
                        <article>
                            <img src={type.img} alt={type.name}></img>
                            <h2>{type.id}</h2>
                        </article>
                    </Link>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 2rem;
    margin: 0.25rem;
    margin-bottom: 4rem;

    @media (min-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
    }

    a {
        text-decoration: none;
        color: black;
        background-color: white;
        border-radius: 0.5rem;
        overflow: hidden;
        outline: 2px solid var(--clr1);
        transition: all 0.3s ease-out;
    }

    .highlight {
        transition: none;
    }

    .dim {
        opacity: 0.5;
    }

    article {
        img {
            width: 100%;
        }

        h2 {
            padding: 0rem;
            text-align: center;
        }
    }
`;

export default Level;
