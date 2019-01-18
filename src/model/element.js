/**
 * Create class who old our new element with data
 */
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
                <p class="is__text__content">${el.gsx$title.$t}</p>
            </div>
            <div class="content--more">
                <img class="is__btn" src="./img/arrow.svg" alt="Cliquez pour voir la description"/>
            </div>
            <div class="content--description is__none">
                <p class="is__text__content">${el.gsx$description.$t}</p>
                <p class="is__text__content"><a href="${el.gsx$article.$t}" target=_blank>${el.gsx$article.$t}</a></p>
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
                elementParent.querySelector(".is__btn").style.transform = "rotate(180deg)";
            } else {
                lastChild.classList.add("is__none");
                elementParent.querySelector(".is__btn").style.transform = "";
            }
        });
    }
}