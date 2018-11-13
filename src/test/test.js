/**
 * Variables
 */
const spreadsheetsId = `1xG2xF92GiSf5yVHU5JFoEHrAvR2ksaMNm7kMHAI4Iyg`;
const spreadsheet = `"https://spreadsheets.google.com/feeds/list/${spreadsheetsId}/1/public/values?alt=json";`;
const app = document.getElementById("app");

/**
 * Déclaration
 */
// const api = async () => {
//     let data = await spreadsheet;
//     let res = await data.json();
//     console.log(res);
// };

const api = () => {
    fetch(spreadsheet)
        .then(
        res => {
            // res.json();
            console.log(res);
        }
    )
};

/**
 * Exécution
 */
api();