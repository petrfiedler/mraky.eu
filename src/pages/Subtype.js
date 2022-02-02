import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Description, Paragraphs } from "../components";
import categories from "../data/categories";
import { capitalize } from "../utils/utilFunctions";

const Subtype = () => {
    let params = useParams();
    let subtype = categories.find((category) => category.id === params.id);
    return (
        <main>
            <article>
                <Heading>{capitalize(subtype.name)}</Heading>
                <Description>
                    <Paragraphs text={subtype.text} />
                </Description>
            </article>
        </main>
    );
};

export default Subtype;
