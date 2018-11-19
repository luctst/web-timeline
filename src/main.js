/**
 * Variables
 */
const navbar = document.getElementById("js-stickyMenu");
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const app = document.getElementById("app");
const gsx = `gsx$`;

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
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("content");
    app.append(div);
}


/**
 * Éxecution
*/
// window.onscroll = function () { myFunction() };
window.addEventListener("scroll", navFixed);