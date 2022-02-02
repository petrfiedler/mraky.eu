import React from "react";
import { useParams } from "react-router-dom";
import subtypes from "../data/subtypes";
import { Heading, Description } from "../components";

const SubtypeCloud = () => {
    let params = useParams();
    let cloud = subtypes
        .find((item) => item.idCZ === params.subtype)
        .list.find((item) => item.id === params.id);

    return (
        <main>
            <article>
                <Heading>{cloud.id}</Heading>
                <Description>{cloud.text}</Description>
                <img src={cloud.img} alt={cloud.id}></img>
            </article>
        </main>
    );
};

export default SubtypeCloud;
