import React from "react";
import categories from "../data/categories";
import { Cards, Heading, Description } from "../components/";

const Poddruhy = () => {
    return (
        <main>
            <article>
                <Heading>Poddruhy oblaků</Heading>
                <Description>
                    Mimo základní druhy oblaků určujeme i poddruhy oblaků, neboť
                    ne každý oblak stejného druhu má shodný vzhled. Ty slouží
                    jako přívlastky k základním druhům odvozené od mírných
                    variací vzhledu a pomáhají nám lépe popsat různá oblaka.
                </Description>
                <Cards
                    cards={categories.filter((c) => c.id !== "druhy")}
                    link={(id) => `/poddruhy/${id}`}
                />
            </article>
        </main>
    );
};

export default Poddruhy;
