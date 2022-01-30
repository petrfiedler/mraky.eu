import React from "react";
import styled from "styled-components";
import types from "../data/types";
import Level from "./Level";

const Druhy = () => {
    return (
        <Wrapper>
            <h1>Druhy oblaků</h1>
            <p>
                Určujeme deset základních morfologických druhů oblaků. Jejich
                názvy jsou odvozeny od jejich vzhledu a vlastností. Jsou složeny
                z latinských výrazů strato, což znamená vrstva, cumulo, což
                znamená kupa, alto, což znamená vyvýšení, nimbo, což znamená
                déšť, a cirro, což znamená řasa. Každý běžně pozorovatelný oblak
                je právě jedním z těchto druhů, ačkoliv za ztížených
                pozorovacích podmínek může být až nemožné oblak klasifikovat.
                Druhy oblaků rozdělujeme podle výškových pater:
            </p>
            <h2>Nízké patro:</h2>
            <Level types={types.filter((type) => type.level === "low")} />
            <h2>Střední patro:</h2>
            <Level types={types.filter((type) => type.level === "middle")} />
            <h2>Vysoké patro:</h2>
            <Level types={types.filter((type) => type.level === "high")} />
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

    > h2 {
        color: var(--clr2);
    }
`;

export default Druhy;
