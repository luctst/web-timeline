import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

const Filter = styled(Container)`
    background-color: #fff;
`;

export default () => {
    const [data, setData] = React.useState({
        optionData: [
            "Categories",
            "Network",
            "Launch",
            "Science",
            "Security",
            "Programming",
            "Social-Media",
            "Design"
        ]
    });

    return (
        <Filter as="section">
            <select>
                {data.optionData.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
            <input type="text"/>
        </Filter>
    );
}