const navbar = document.getElementById("js-stickyMenu"); const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`; const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`; const app = document.getElementById("app"); const sticky = navbar.offsetTop; const select = document.querySelector("select"); const navFixed = () => { if (window.pageYOffset >= sticky) { navbar.classList.add("sticky") } else { navbar.classList.remove("sticky") } }
const createContent = el => {
    const div = document.createElement("div"); if (el.gsx$important.$t) {
        div.classList.add("is__content__important"); div.innerHTML += `
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
                    <p><button type="button" class="is__btn__important">See more !</button></p>
                </div>
                <div class="content--description is__none">
                    <p class="is__text__content">${el.gsx$description.$t}</p>
                    <p class="is__text__content"><a href="${el.gsx$article.$t}" target=_blank>${el.gsx$article.$t}</a></p>
                </div>`; app.appendChild(div)
    } else {
        div.classList.add("content"); div.innerHTML += `
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
                </div>`; app.appendChild(div)
    }
}; const renderFirstContent = async () => { let windowSize = window.innerHeight; try { let data = await fetch(spreadsheet); let res = await data.json(); let entry = res.feed.entry; if (windowSize <= 767) { for (let i = 0; i < entry.length; i++) { if (i <= 5) { createContent(entry[i]) } else if (i > 5) { break } } } else { for (let i = 0; i < entry.length; i++) { if (i <= 10) { createContent(entry[i]) } else if (i > 10) { break } } } } catch (error) { throw error } }
const addContent = async () => { try { let data = await fetch(spreadsheet); let json = await data.json(); let res = json.feed.entry; let contentDate = document.querySelectorAll(".content--date"); for (let i = 0; contentDate.length <= res.length; i++) { let getLastDate = contentDate.item(contentDate.length - 1).firstElementChild.textContent; if (res[i].gsx$date.$t === getLastDate) { let id = parseInt(res[i].gsx$id.$t); for (let y = id; y <= id + 5; y++) { createContent(res[y]) } } } } catch (error) { throw error } }
const filter = async () => { let categoryValue = select.value; try { let data = await fetch(spreadsheet); let json = await data.json(); let res = json.feed.entry; app.innerHTML = ""; res.forEach(el => { if (el.gsx$category.$t === categoryValue) { createContent(el) } else { return } }) } catch (error) { throw error } }; const getDescription = element => { if (element.target.className === "is__btn" || element.target.className === "is__btn__important") { let parent = element.target.parentNode.parentNode.parentNode; let childLast = parent.lastElementChild; const classNom = "content--description is__none"; if (childLast.className === classNom) { childLast.classList.remove("is__none") } else { childLast.classList.add("is__none") } } }
window.addEventListener("DOMContentLoaded", renderFirstContent); window.addEventListener("click", (event) => getDescription(event)); window.addEventListener("scroll", () => { navFixed(); if (select.value === "") { if (this.innerHeight + this.pageYOffset === document.body.clientHeight) { addContent() } } }); select.addEventListener("change", filter)