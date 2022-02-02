import React from "react";
import styled from "styled-components";
import types from "../data/types";
import { Cards, Heading, Description } from "../components";

const Druhy = () => {
    return (
        <Wrapper>
            <article>
                <Heading>Druhy oblaků</Heading>
                <Description>
                    Určujeme deset základních morfologických druhů oblaků.
                    Jejich názvy jsou odvozeny od jejich vzhledu a vlastností.
                    Jsou složeny z latinských výrazů strato, což znamená vrstva,
                    cumulo, což znamená kupa, alto, což znamená vyvýšení, nimbo,
                    což znamená déšť, a cirro, což znamená řasa. Každý běžně
                    pozorovatelný oblak je právě jedním z těchto druhů, ačkoliv
                    za ztížených pozorovacích podmínek může být až nemožné oblak
                    klasifikovat. Druhy oblaků rozdělujeme podle výškových
                    pater:
                </Description>
                <h2>Nízké patro:</h2>
                <Cards
                    cards={types.filter((type) => type.level === "low")}
                    link={(id) => `/druhy/${id}`}
                />
                <h2>Střední patro:</h2>
                <Cards
                    cards={types.filter((type) => type.level === "middle")}
                    link={(id) => `/druhy/${id}`}
                />
                <h2>Vysoké patro:</h2>
                <Cards
                    cards={types.filter((type) => type.level === "high")}
                    link={(id) => `/druhy/${id}`}
                />
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    > article > h2 {
        color: var(--clr2);
    }
`;

export default Druhy;
