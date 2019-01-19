/**
 * Variables
 */
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const fn = require("./model/function");
const port = 8888;

/**
 * Déclaration
 */
http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    let data;

    if (pathname === "/") {
        fn.getFile(res, `${__dirname}/index.html`);
    } else if (pathname === "/main.css") {
        fn.getFile(res, `${__dirname}/main.css`);
    } else if (pathname === "/main.js") {
        fn.getFile(res, `${__dirname}/main.js`);
    } else if (pathname === "/assets/img/arrow.svg") {
        fn.getFile(res, `${__dirname}/assets/img/arrow.svg`);
    } else if (pathname === "/message") {
        res.on("data", chunk => {
            data = chunk.toString();
        }).on("end", () => {
            res.write(data);
            res.end();
        });
    }
}).listen(port, () => {
    console.log(`Your app is available here http://127.0.0.1:${port}`);
});

