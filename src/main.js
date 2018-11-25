/**
 * Variables
 */
const navbar = document.getElementById("js-stickyMenu");
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const app = document.getElementById("app");
const sticky = navbar.offsetTop;

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
const createContent = el => { // TODO: Create content
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
            </div>`;
    app.appendChild(div);
};
const createDescription = (el, parent) => {
    if (parent.lastChild.className === "content--description") {
        parent.lastChild.classList.add("is__none");
        parent.removeChild(document.querySelector(".content--description.is__none"));
    } else {
        const div = document.createElement("div");
        div.classList.add("content--description");
        div.innerHTML += `<p class="is__text__content">${el.gsx$description.$t}</p>`;
        parent.appendChild(div);
    }
}
const renderFirstContent = array => { // TODO: Render content
    let windowSize = window.innerHeight;
    if (windowSize <= 767) {
        for (let i = 0; i < array.length; i++) {
            if (i <= 5) {
                createContent(array[i]);
            } else if (i > 5) {
                break;
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i <= 10) {
                createContent(array[i]);
            } else if (i > 10) {
                break;
            }
        }
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
                    for (let y = id + 1; y <= id + 5; y++) {
                        createContent(res[y]);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const getDescription = async () => {
    try {
        let data = await fetch(spreadsheet);
        let json = await data.json();
        let res = json.feed.entry;
        const btn = document.querySelectorAll(".content--more");
        btn.forEach(el => {
            el.addEventListener("click", () => {
                let parent = el.parentNode;
                let id = el.parentNode.firstElementChild.firstElementChild.textContent;
                for (let i = 0; i < res.length; i++) {
                    if (res[i].gsx$date.$t === id) {
                        createDescription(res[i], parent);
                        break;
                    }
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
}
const getData = async () => { // TODO: Get data
    try {
        let data = await fetch(spreadsheet);
        let res = await data.json();
        renderFirstContent(res.feed.entry);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Éxecution
 */
document.addEventListener("DOMContentLoad", getData());
let observer = new MutationObserver(getDescription);
observer.observe(app, { childList: true});
document.addEventListener("scroll", () => {
    navFixed();
    if (this.innerHeight + this.pageYOffset === document.body.clientHeight) {
        addContent();
    }
});