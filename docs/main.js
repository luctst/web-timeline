/**
 * Variables
 */
const navbar = document.getElementById("js-stickyMenu");
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const app = document.getElementById("app");

/**
 * Déclaration
 */
const navFixed = () => { // TODO: Fixed navbar
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const render = (array) => {
    array.forEach(el => {
        const div = document.createElement("div");
        div.classList.add("content");
        div.innerHTML += `
            <div class="content--date">
                <p class="is--text--content">${el.gsx$date.$t}</p>
            </div>
            <div class="content--cat">
                <p class="is--text--content">${el.gsx$title.$t}</p>
            </div>
            <div class="content--title">
                <p class="is--text--content">${el.gsx$description.$t}</p>
            </div>
            <div class="content--more">
                <p><button type="button" class="is__btn">See more !</button></p>
            </div>`;
        app.appendChild(div);
    });
}
const getData = async () => {
    try {
        let data = await fetch(spreadsheet);
        let res = await data.json();
        render(res.feed.entry);
    } catch (error) {
        
    }
}


/**
 * Éxecution
*/
document.addEventListener("DOMContentLoad", getData());
window.addEventListener("scroll", navFixed);