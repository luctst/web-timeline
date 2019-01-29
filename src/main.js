/**
 * Import
 */
import "./assets/scss/main.scss";
import "./assets/img/Network.svg";
import "./assets/img/Launch.svg";
import "./assets/img/Ai.svg";
import "./assets/img/arrow.svg";
import "./assets/img/Programming.svg";
import "./assets/img/Science.svg";
import "./assets/img/Security.svg";

/**
* Variables
*/
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const navbar = document.querySelector(".header--infobar");
const header = document.querySelector("header");
const dateField = document.querySelector(".header--infobar--date");
const sectionLeft = document.querySelector(".main--left");
const select = document.querySelector("select");
const optionValues = document.querySelectorAll("option");
const sticky = navbar.offsetTop;
let elementTab = [];
let elementFilter = [];
let dateChronologique = true;

/**
 * Déclaration
 */
const getData = async bdd => { // TODO: Get data from BDD
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res.feed.entry;
    } catch (error) {
        throw error;
    }
}
const navFixed = () => { // TODO: Fixed navbar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("is__sticky");
        header.classList.add("sticky");
        navbar.classList.add("container");
    } else {
        navbar.classList.remove("is__sticky");
        header.classList.remove("sticky");
        navbar.classList.remove("container");
    }
}
const createElement = obj => {
    const div = document.createElement("div");
    div.classList.add("main--left--element");
    div.innerHTML += `
        <div class="main--left--element--date" data-toggle="modal" data-target="#modal">
            <h3 class="is__date">${obj.day} / ${obj.month}</h3>
            <h4 class="is__date__year">${obj.year}</h4>
        </div>
        <div class="main--left--element--img">
            <img src="./img/${obj.img}" alt="Icon" class="is__element__img"/>
        </div>
        <div class="main--left--element--text">
            <h2 class="is__title__element">${obj.title}</h2>
            <p class="is__content__element">${obj.description}</p>
            <p class="is__content__tag__element">#${obj.category} - cliquez pour plus d'informations.</p>
        </div>`;
    sectionLeft.appendChild(div);
    return div;
}
const renderContent = async (init) => { // TODO: Render element with unknown index
    const data = await getData(spreadsheet);
    for (let i = init; i < data.length; i++) {
        new Element(data[i]);
    }
}
const addContent = async () => { // TODO: Add content when scroll bottom of the page.
    const lastItem = parseInt(elementTab[elementTab.length - 1].id) + 1;
    const position = lastItem + 8;
    renderContent(lastItem, position);
}
const filter = async () => { //TODO: Filter date with categories
    sectionLeft.innerHTML = "";
    if (select.value === "") {
        elementTab.forEach(element => {
            createElement(element);
        });
    } else {
        elementFilter = [];
        dateChronologique = true;
        const data = await getData(spreadsheet);
        data.forEach(element => {
            if (element.gsx$category.$t === select.value) {
                new Element(element);
            }
        });
    }
};
const returnDate = () => {
    sectionLeft.innerHTML = "";
    if (select.value === "") {
        if (dateChronologique) {
            for (let i = elementTab.length - 1; i >= 0; i--) {
                createElement(elementTab[i]);
            }
            dateChronologique = false;
        } else {
            for (const i of elementTab) {
                createElement(i);
            }
            dateChronologique = true;
        }
    } else {
        if (dateChronologique) {
            for (let i = elementFilter.length - 1; i >= 0; i--) {
                createElement(elementFilter[i]);
            }
            dateChronologique = false;
        } else {
            for (const i of elementFilter) {
                createElement(i);
            }
            dateChronologique = true;
        }
    }
}
class Element { // TODO: Class for new Element
    constructor(data) {
        this.setElementProps(data);
        this.setImg(this.category);
        this.pushInGoodTab();
        this.component.addEventListener("click", () => { this.showMoreInfo() });
    }
    setElementProps(data) {
        const dateTab = data.gsx$date.$t.split("-");
        this.day = dateTab[0];
        this.month = dateTab[1];
        this.year = dateTab[2];
        this.category = data.gsx$category.$t;
        this.content = data.gsx$content.$t;
        this.description = data.gsx$description.$t;
        this.title = data.gsx$title.$t;
        this.id = data.gsx$id.$t;
    }
    setImg(category) {
        for (const i of optionValues) {
            if (category === i.value) {
                this.img = `${category}.svg`;
            }
        }
    }
    pushInGoodTab() {
        if (select.value === "") {
            let div = createElement(this);
            this.component = div;
            elementTab.push(this);
        } else {
            let div = createElement(this);
            this.component = div;
            elementFilter.push(this);
        }
    }
    showMoreInfo() {
        alert(`bonjour ${this.id}`);
    }
}

/**
 * Éxecution
 */
window.addEventListener("DOMContentLoaded", () => {renderContent(0)});
window.addEventListener("scroll", () => navFixed());
select.addEventListener("change", filter);
dateField.addEventListener("click", returnDate);