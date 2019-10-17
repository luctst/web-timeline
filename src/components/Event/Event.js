import React, { useRef } from "react";
import "../../styles/main.scss";
import EventOverview from "./EventOverview";
import Date from "./Date.style"
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
  const hiddenOverview = useRef(null);

  const toggleClass = () => {
    document.body.classList.toggle("is__overflow__hidden");
    hiddenOverview.current.classList.toggle("is__none");
  }

  return (
    <React.Fragment>
      <div className="main--left--element" onClick={toggleClass}>
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
      <section className="main--right is__none" ref={hiddenOverview}>
        <EventOverview data={props.data} closeOverview={toggleClass} />
        {/* <EventOverview data={props.data} closeOverview={arrowClose}  /> */}
      </section>
    </React.Fragment>
  )
}

export default Event