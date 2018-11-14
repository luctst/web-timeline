/**
 * Variables
 */
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json`;
const app = document.getElementById("app");
const gsx = `gsx$`;

/**
 * Déclaration
 */
const render = (array) => {
    array.forEach(el => {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const hr = document.createElement("hr");
        h1.innerHTML += `${el.gsx$id.$t} - ${el.gsx$title.$t}`;
        p.innerHTML += `<strong>${el.gsx$description.$t}</strong>`;
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(hr);
        app.appendChild(div);
    });
}
const api = async () => {
    try {
        let data = await fetch(spreadsheet);
        let res = await data.json();
        console.log(res.feed.entry);
        render(res.feed.entry);
    } catch (error) {
        
    }
};

/**
 * Exécution
 */
api();
