import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import categories from "../data/categories";

const Poddruhy = () => {
    const [highlight, setHighlight] = useState("");
    return (
        <Wrapper>
            <h1>Poddruhy oblaků</h1>
            <p>
                Mimo základní druhy oblaků určujeme i poddruhy oblaků, neboť ne
                každý oblak stejného druhu má shodný vzhled. Ty slouží jako
                přívlastky k základním druhům odvozené od mírných variací
                vzhledu a pomáhají nám lépe popsat různá oblaka.
            </p>
            <section>
                {categories
                    .filter((c) => c.id !== "druhy")
                    .map((category) => {
                        return (
                            <Link
                                to={`/druhy/${category.id}`}
                                key={category.id}
                                onMouseOver={() => setHighlight(category.id)}
                                onMouseLeave={() => setHighlight("")}
                                onFocus={() => setHighlight(category.id)}
                                onBlur={() => setHighlight("")}
                                className={
                                    category.id === highlight
                                        ? "highlight"
                                        : highlight !== ""
                                        ? "dim"
                                        : ""
                                }>
                                <article>
                                    <img
                                        src={category.img}
                                        alt={category.name}></img>
                                    <h2>{category.name}</h2>
                                </article>
                            </Link>
                        );
                    })}
            </section>
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

    section {
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
    }
`;

export default Poddruhy;
