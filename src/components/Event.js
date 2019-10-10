import React from "react";
import "../styles/main.scss";
import Network from "../assets/img/Network.svg";
import Launch from "../assets/img/Launch.svg";
import Ai from "../assets/img/Ai.svg";
import arrow from "../assets/img/arrow.svg";
import Programming from "../assets/img/Programming.svg";
import Science from "../assets/img/Science.svg";
import Security from "../assets/img/Security.svg";
import SocialMedia from "../assets/img/Social-Media.svg";
import Design from "../assets/img/Design.svg";

function Event() {
    return (
      <React.Fragment>
        <div className="main--left--element--date">
          <p>20/10/2019</p>
        </div>
        <div className="main--left--element--img">
          {/* <img src="../assets/img/Network.svg" alt="Icon"></img> */}
          <img src={Network} alt="Icon" className="is__element__img" width="60px"></img>
        </div>
        <div className="main--left--element--text">
          <h2 className="is__title__element">Title</h2>
          <p className="is__content__element">description</p>
          <p className="is__content__tag__element">#category</p>
        </div>
      </React.Fragment>
    )
  }

    export default Event