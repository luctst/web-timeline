if (process.env.NODE_ENV === "development") {
    process.env.DB_URL = "http://localhost:5000/";
} else {
    process.env.DB_URL = "";
}

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Filter from "../components/Filter";

export default () => {
    return (
        <>
            <Head>
                <title>Web-timeline</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <style jsx global>{`
                body {
                    background-color: #ebf2f5;
                    font-family: "Helvetica Neue";
                    margin: 0;
                    padding: 0;
                }
            `}</style>
            <Header/>
            <Filter/>
        </>
    );
};