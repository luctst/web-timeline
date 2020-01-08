import React from "react";

export default function Home () {
    let [click, setClick] = React.useState(0);

    return (
        <h1 onClick={() => setClick(click += 1)}>J'ai cliqué - {click}</h1>
    );
};