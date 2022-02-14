import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Heading, Description, Paragraph } from "../components";
import types from "../data/types";

const Type = () => {
    const params = useParams();
    const typeData = types.find((item) => item.id === params.id);
    const article = typeData.article;
    return (
        <Wrapper>
            <article>
                <Heading>{params.id}</Heading>
                <Description>{typeData.definition}</Description>
                <img src={typeData.img} alt={typeData.id}></img>
                {article.map(
                    (item) =>
                        (item.type === "text" && (
                            <Paragraph> {item.text} </Paragraph>
                        )) ||
                        (item.type === "image" && (
                            <img src={item.src} alt={item.alt}></img>
                        ))
                )}
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.main``;

export default Type;
