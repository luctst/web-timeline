/**
 * TODO: Create a new element an element is simply a all tha data that we fetch from the * database and display in the section--left element.
 */
export default class Element { // TODO: Class for new Element
    constructor(data, option, select, fn, tab, fnContent) {
        this.setElementProps(data);
        this.setImg(this.category, option);
        this.pushInGoodTab(select, fn, tab);
        this.component.addEventListener("click", () => { this.showMoreInfo(fnContent) });
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
    setImg(category, option) {
        for (const i of option) {
            if (category === i.value) {
                this.img = `${category}.svg`;
            }
        }
    }
    pushInGoodTab(select, fn, tab) {
        if (select.value === "") {
            let div = fn(this);
            this.component = div;
            tab.push(this);
        } else {
            let div = fn(this);
            this.component = div;
        }
    }
    showMoreInfo(fnContent) {
        fnContent(this);
    }
}