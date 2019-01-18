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
    const {pathname} = url.parse(req.url);

    if (pathname === "/") {
        fn.getFile(res, `${__dirname}/index.html`);
    } else if (pathname === "/main.css") {
        fn.getFile(res, `${__dirname}/main.css`);
    } else if (pathname === "/main.js") {
        fn.getFile(res, `${__dirname}/main.js`);
    } else if (pathname === "/assets/img/arrow.svg") {
        fn.getFile(res, `${__dirname}/assets/img/arrow.svg`);
    }
}).listen(port, () => {
    console.log(`Your app is available here http://www.127.0.0.1:${port}`);
});

