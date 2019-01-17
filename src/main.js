/**
     * Variables
     */
const navbar = document.getElementById("js-stickyMenu");
const dateField = document.querySelector(".is__subTitle");
const select = document.querySelector("select");
const app = document.getElementById("app");
const sticky = navbar.offsetTop;
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
let elementTab = [];
let idInit = 0;
let dateChronologique = true;

/**
 * Déclaration
 */
const navFixed = () => { // TODO: Fixed navbar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const getData = async bdd => { // TODO: Get data from BDD
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res.feed.entry;
    } catch (error) {
        throw error;
    }
}
const renderContent = async (init, index) => { // TODO: Render element with unknown index
    const data = await getData(spreadsheet);
    for (let i = init; i < index; i++) {
        let el = new Element();
        el.createElement(data[i]);
        el.getDescription();
        elementTab.push(el);
    }
    console.log(elementTab);
}
const filter = async () => { // TODO: Filter event by tag.
    app.innerHTML = "";
    const categoryValue = select.value;
    const tabLength = elementTab.length;
    if (categoryValue === "") {
        idInit = 0;
        elementTab = [];
        renderContent(0, tabLength);
    } else {
        const data = await getData(spreadsheet);
        data.forEach(el => {
            if (el.gsx$category.$t === categoryValue) {
                let element = new Element();
                element.createElement(el);
                element.getDescription();
            }
        });
    }
}
const addContent = async () => { // TODO: Add content when scroll bottom of the page.
    const lastItem = elementTab[elementTab.length - 1].id + 1;
    const position = lastItem + 8;
    renderContent(lastItem, position);
}
const returnDate = async () => {
    app.innerHTML = "";
    const data = await getData(spreadsheet);
    if (dateChronologique) {
        for (let i = elementTab.length - 1; i >= 0; i--) {
            let el = new Element();
            el.createElement(data[i]);
            el.getDescription();
        }
        dateChronologique = false;
    } else {
        for (let i = 0; i < elementTab.length; i++) {
            let el = new Element();
            el.createElement(data[i]);
            el.getDescription();
        }
        dateChronologique = true;
    }
}
class Element { // TODO: Class for new Element
    constructor() {
        this.id = idInit++;
    }
    createElement(el) {
        const div = document.createElement("div");
        div.classList.add("content");
        div.innerHTML += `
            <div class="content--date">
                <p class="is__text__content">${el.gsx$date.$t}</p>
            </div>
            <div class="content--cat">
                <p class="is__text__content">${el.gsx$category.$t}</p>
            </div>
            <div class="content--title">
                <p class="is__title__content">${el.gsx$title.$t}</p>
            </div>
            <div class="content--more">
                <img class="is__img__arrow" src="./img/arrow.svg" alt="Cliquez pour voir la description"/>
            </div>
            <div class="content--description is__none">
                <p class="is__title__content">${el.gsx$description.$t}</p>
                <p class="is__btn"><a href="#">See more</a></p>
            </div>`;
        app.appendChild(div);
        this.html = div;
        this.category = el.gsx$category.$t;
    };
    getDescription() {
        const elementParent = this.html;
        const lastChild = elementParent.lastChild;
        elementParent.addEventListener("click", () => {
            if (lastChild.className === "content--description is__none") {
                lastChild.classList.remove("is__none");
                elementParent.querySelector(".is__img__arrow").style.transform = "rotate(180deg)";
            } else {
                lastChild.classList.add("is__none");
                elementParent.querySelector(".is__img__arrow").style.transform = "";
            }
        });
    }
}

/**
 * Éxecution
 */
window.addEventListener("DOMContentLoaded", () => renderContent(0, 6));
window.addEventListener("scroll", () => {
    navFixed();
    if (select.value === "" && dateChronologique) {
        if (this.innerHeight + this.pageYOffset === document.body.clientHeight) {
            addContent();
        }
    };
});
select.addEventListener("change", filter);
dateField.addEventListener("click", returnDate);