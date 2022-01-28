import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import categories from "../data/categories";

const Categories = () => {
    // which category is on mouseover
    const [highlight, setHighlight] = useState("");

    return (
        <Wrapper>
            <h1>Vyberte si, co chcete prostudovat:</h1>
            <section>
                {categories.map((category) => {
                    return (
                        <Link
                            to={
                                category.id === "druhy"
                                    ? "/druhy"
                                    : `/poddruhy/${category.id}`
                            }
                            key={category.id}
                            onMouseOver={() => setHighlight(category.id)}
                            onMouseLeave={() => setHighlight("")}
                            onFocus={() => setHighlight(category.id)}
                            onBlur={() => setHighlight("")}
                            /*
                                3 states:
                                    - all are highlighted: class ""
                                    - only this cell is highlighted: class "highlight"
                                    - some other cell is highlighted: class "dim"
                            */
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
        text-align: left;
        color: var(--clr2);
    }

    section {
        display: grid;
        gap: 2rem;
        margin: 0.25rem;

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
                padding: 1rem;
            }
        }
    }
`;

export default Categories;
