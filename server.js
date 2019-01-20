/**
 * Variables
 */
const http = require("http");
const url = require("url");
const fn = require("./src/model/function");
const port = 8888;

/**
 * Déclaration
 */
const renderPage = (data, response) => {
    console.log(data);
    response.end(`Vous avez clique sur la catégorie ${data.category}`);
}

/**
 * Éxecution
 */
http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    var data;

    if (pathname === "/") {
        fn.getFile(res, `${__dirname}/src/index.html`);
    } else if (pathname === "/main.css") {
        fn.getFile(res, `${__dirname}/src/main.css`);
    } else if (pathname === "/main.js") {
        fn.getFile(res, `${__dirname}/src/main.js`);
    } else if (pathname === "/assets/img/arrow.svg") {
        fn.getFile(res, `${__dirname}/src/assets/img/arrow.svg`);
    } else if (pathname === "/message") {
        req.on("data", chunk => {
            data = JSON.parse(chunk.toString());
        }).on("end", () => {
            console.log(data);
            res.end(``);
        });
    }
}).listen(port, () => {
    console.log(`Your app is available here http://127.0.0.1:${port}`);
});