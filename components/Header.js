import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import Link from "next/link";

const Header = styled(Container)`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;

    h1 {
        color: #333;
        font-size: 2rem;
        font-weight: 300;
        line-height: 0.7em;
        margin: 0;
    }

    a {
        background-color: #1a73e8;
        border-radius: 4px;
        color: #fff;
        text-decoration: none;
        padding: 9px 23px;
    }
`;
export default () => {
    return (
        <Header as="header">
            <h1>The evolution of technologies</h1>
            <Link href="/connexion"><a>Connexion</a></Link>
        </Header>
    );
};