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