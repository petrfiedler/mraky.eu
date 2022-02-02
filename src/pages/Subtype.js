import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Description, Paragraphs, Cards } from "../components";
import categories from "../data/categories";
import subtypes from "../data/subtypes";
import { capitalize } from "../utils/utilFunctions";

const Subtype = () => {
    let params = useParams();
    let subtype = categories.find((category) => category.id === params.id);
    let subtypeClouds = subtypes.find((item) => item.id === subtype.data).list;
    return (
        <main>
            <article>
                <Heading>{capitalize(subtype.name)}</Heading>
                <Description>
                    <Paragraphs text={subtype.text} />
                </Description>
                <Cards
                    cards={subtypeClouds}
                    link={(id) => `/poddruhy/${params.id}/${id}`}
                />
            </article>
        </main>
    );
};

export default Subtype;
