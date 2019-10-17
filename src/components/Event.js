import React from "react";
import styled from 'styled-components'
import "../styles/main.scss";
// import Network from "../assets/img/Network.svg";
// import Launch from "../assets/img/Launch.svg";
// import Ai from "../assets/img/Ai.svg";
// import arrow from "../assets/img/arrow.svg";
// import Programming from "../assets/img/Programming.svg";
// import Science from "../assets/img/Science.svg";
// import Security from "../assets/img/Security.svg";
// import SocialMedia from "../assets/img/Social-Media.svg";
// import Design from "../assets/img/Design.svg";

function Event(props) {
  const Date = styled.h3`
    margin-top: 18px;
  `
  return (
    <div className="main--left--element">
      <div className="main--left--element--date">
        <Date className="is__date">{props.data.gsx$date.$t}</Date>
      </div>
      <div className="main--left--element--img">
        <img src={props.data.gsx$category.$t} alt="Icon" className="is__element__img" width="60px"></img>
      </div>
      <div className="main--left--element--text">
        <h2 className="is__title__element">{props.data.gsx$title.$t}</h2>
        <p className="is__content__element">{props.data.gsx$description.$t}</p>
        <p className="is__content__tag__element">#{props.data.gsx$category.$t}</p>
      </div>
    </div>
  )
}

export default Event