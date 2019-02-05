/**
 * TODO: This file is used to make the searchBar operational.
 */
import autoComplete from "@tarekraafat/autocomplete.js";
export default new autoComplete({
    data: { src: elementTab, key: "title" },
    placeHolder: "Write the date you're looking for",
    selector: ".is__search",
    threshold: 0,
    searchEngine: "loose",
    resultList: {
        container: source => {
            resultsListID = "autoComplete_results_list";
            return resultsListID;
        },
        destination: document.querySelector(".is__search"),
        position: "afterend"
    }
});