/**
 * Import
 */
import React from "react";
import { render } from "react-dom";
import css from "./assets/sass/main.scss";
import img from "./assets/img/arrow.svg";
import Header from "./view/components/Header";
import Nav from "./view/components/Nav";

/**
 * Variables
 */
// const app = document.querySelector("#root");
// const navbar = document.getElementById("js-stickyMenu");
// const dateField = document.querySelector(".is__subTitle");
// const select = document.querySelector("select");
// const sticky = navbar.offsetTop;
// const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
// const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
// let elementTab = [];
// let idInit = 0;
// let dateChronologique = true;

/**
 * Déclaration
 */
export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Nav/>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
// window.addEventListener("DOMContentLoaded", () => renderContent(0, 6));
// window.addEventListener("scroll", () => {
//     navFixed();
//     if (select.value === "" && dateChronologique) {
//         if (this.innerHeight + this.pageYOffset === document.body.clientHeight) {
//             addContent();
//         }
//     };
// });
// select.addEventListener("change", filter);
// dateField.addEventListener("click", returnDate);
render(<App />, app);