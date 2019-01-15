/**
 * Variables
 */
const navbar = document.getElementById("js-stickyMenu");
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const app = document.getElementById("app");
const sticky = navbar.offsetTop;
const select = document.querySelector("select");
const elementTab = [];
const dateField = document.querySelector(".is__subTitle");

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
const renderContent = async (index) => { // TODO: Render element with unknown index
    let data = await getData(spreadsheet);
    for (let i = 0; i < index; i++) {
        let el = new Element();
        el.createElement(data[i]);
        el.getDescription();
        elementTab.push(el);
    }
    console.log(elementTab);
}
class Element { // TODO: Class for new Element
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
                <p class="is__text__content">${el.gsx$title.$t}</p>
            </div>
            <div class="content--more">
                <p><button type="button" class="is__btn">See more !</button></p>
            </div>
            <div class="content--description is__none">
                <p class="is__text__content">${el.gsx$description.$t}</p>
                <p class="is__text__content"><a href="${el.gsx$article.$t}" target=_blank>${el.gsx$article.$t}</a></p>
            </div>`;
        app.appendChild(div);
        this.html = div;
    };
    getDescription() {
        const elementParent = this.html;
        const lastChild = elementParent.lastChild;
        elementParent.addEventListener("click", () => {
            if (lastChild.className === "content--description is__none") {
                lastChild.classList.remove("is__none");
            } else {
                lastChild.classList.add("is__none");
            }
        });
    }
}
const navFixed = () => { // TODO: Fixed navbar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const addContent = async () => { // TODO: Add content when scroll bottom of the page.
    try {
        let data = await fetch(spreadsheet);
        let json = await data.json();
        let res = json.feed.entry;
        let contentDate = document.querySelectorAll(".content--date");
        for (let i = 0; contentDate.length <= res.length; i++) {
            let getLastDate = contentDate.item(contentDate.length - 1).firstElementChild.textContent;
            if (res[i].gsx$date.$t === getLastDate) {
                let id = parseInt(res[i].gsx$id.$t);
                for (let y = id; y <= id + 5; y++) {
                    createContent(res[y]);
                }
            }
        }
    } catch (error) {
        throw error;
    }
}
const filter = async () => { // TODO: Filter event by tag.
    let categoryValue = select.value;
    try {
        let data = await fetch(spreadsheet);
        let json = await data.json();
        let res = json.feed.entry;
        app.innerHTML = "";
        res.forEach(el => {
            if (el.gsx$category.$t === categoryValue) {
                createContent(el);
            } else {
                return;
            }
        });
    } catch (error) {
        throw error;
    }
};

/**
 * Éxecution
 */
window.addEventListener("DOMContentLoaded", () => renderContent(5));
window.addEventListener("scroll", () => {
    navFixed();
    if (select.value === "") {
        if (this.innerHeight + this.pageYOffset === document.body.clientHeight) {
            addContent();
        }
    };
});
select.addEventListener("change", filter);
dateField.addEventListener("click", () => {
    app.innerHTML = "";
    elementTab.reverse();
    console.log(elementTab);
});