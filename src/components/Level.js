import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Level = ({ types }) => {
    const [highlight, setHighlight] = useState("");
    return (
        <Wrapper>
            {types.map((type) => {
                return (
                    <Link
                        to={`/druhy/${type.id}`}
                        key={type.id}
                        onMouseOver={() => setHighlight(type.id)}
                        onMouseLeave={() => setHighlight("")}
                        onFocus={() => setHighlight(type.id)}
                        onBlur={() => setHighlight("")}
                        className={
                            type.id === highlight
                                ? "highlight"
                                : highlight !== ""
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
