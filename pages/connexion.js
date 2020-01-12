import React from "react";
import Container from "../styles/Container";
import styled from "styled-components";
import Link from "next/link";

const Connexion = styled(Container)`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    max-height: 100vh;

    .form {
        border-radius: 8px;
        border: 1px solid #dadce0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        min-height: 500px;
        padding: 48px 40px 36px;
        width: 450px;

        .form--form {
            input {
                background-color: transparent;
                border: none;
                border-radius: 4px;
                color: #202124;
                font-size: 16px;
                height: 28px;
                margin: 1px 1px 0 1px;
                padding: 13px 15px;
            }

            div {
                display: flex;
                justify-content: space-around;

                a {
                    color: #1a73e8;
                    line-height: 1.4286;
                    text-decoration: none;
                }

                button {
                    border: none;
                    background-color: #1a73e8;
                    border-radius: 4px;
                    color: #fff;
                    padding: 8px 16px;
                }
            }
        }
    }
`;

export default () => {
    return (
        <Connexion as="section">
            <div className="form">
                <div className="form--title">
                    <h1>Connexion</h1>
                </div>
                <form method="POST" className="form--form">
                    <input type="text"/>
                    <div>
                        <Link href="/inscription"><a>Inscription</a></Link>
                        <button>Suivant</button>
                    </div>
                </form>
            </div>
        </Connexion>
    );
}