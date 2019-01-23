/**
* Variables
*/
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const navbar = document.querySelector(".header--infobar");
const header = document.querySelector("header");
const dateField = document.querySelector(".is__subTitle");
const sectionLeft = document.querySelector(".main--left");
const select = document.querySelector("select");
const selectValues = ["", "Network", "Launch", "Science", "Security", "Programming", "Ai", "Social-Media", "Design"];
const sticky = navbar.offsetTop;
let elementTab = [];
let idInit = 0;
let dateChronologique = true;

/**
 * Déclaration
 */
const navFixed = () => { // TODO: Fixed navbar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("is__sticky");
        header.classList.add("sticky");
    } else {
        navbar.classList.remove("is__sticky");
        header.classList.remove("sticky");
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
        new Element(data[i]);
    }
    console.log(elementTab);
}
const fillSelectTag = () => { // TODO: Fill the select tag
    selectValues.forEach(element => {
        const option = document.createElement("option");
        if (element === "") {
            option.value = " ";
            option.textContent = "Categories";
            select.appendChild(option);
        } else {
            option.value = element;
            option.textContent = element;
            select.appendChild(option);
        }
    });
};
const addContent = async () => { // TODO: Add content when scroll bottom of the page.
    const lastItem = elementTab[elementTab.length - 1].id + 1;
    const position = lastItem + 8;
    renderContent(lastItem, position);
}
class Element { // TODO: Class for new Element
    constructor(data) {
        this.id = idInit++;
        this.createElement(data);
        elementTab.push(this);
    }
    createElement(el) {
        this.formatElement(el);
        this.setImg(this.category);
        const div = document.createElement("div");
        div.classList.add("main--left--element");
        div.innerHTML += `
        <div class="main--left--element--date">
            <h3 class="is__date">${this.day} / ${this.month}</h3>
            <h4 class="is__date__year">${this.year}</h4>
        </div>
        <div class="main--left--element--img">
            <img src="./assets/img/${this.img}" alt="Icon" class="is__element__img"/>
        </div>
        <div class="main--left--element--text">
            <h2 class="is__title__element">${this.title}</h2>
            <p class="is__content__element">${this.description}</p>
            <p class="is__content__tag__element">#${this.category}</p>
        </div>
        `;
        sectionLeft.appendChild(div);
        this.html = div;
    };
    formatElement(data) {
        const dateTab = data.gsx$date.$t.split("-");
        this.day = dateTab[0];
        this.month = dateTab[1];
        this.year = dateTab[2];
        this.category = data.gsx$category.$t;
        this.content = data.gsx$content.$t;
        this.description = data.gsx$description.$t;
        this.title = data.gsx$title.$t;
    }
    setImg(category) {
        selectValues.forEach(element => {
            if (category === element) {
                this.img = `${element}.svg`;
            }
        });
    }
}

/**
 * Éxecution
 */
window.addEventListener("DOMContentLoaded", () => {
    fillSelectTag();
    renderContent(0, 4);
});
window.addEventListener("scroll", () => {
    navFixed();
    if (select.value === " " && dateChronologique) {
        if (this.innerHeight + this.pageYOffset === document.body.clientHeight) {
            addContent();
        }
    };
});
// select.addEventListener("change", filter);
// dateField.addEventListener("click", returnDate);
window.addEventListener("scroll", () => {
    console.log(this.innerHeight + this.pageYOffset);
    console.log(document.body.clientHeight);
});