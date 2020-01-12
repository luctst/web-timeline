const fs = require("fs");
const path = require("path");
const CWD = process.cwd();
const url = require("url");

const config = require("../config");

/**
 * Create the response header
 * @param {Boolean} error If true reponse should return an 404 header.
 * @param {Object} reponse The reponse object return on http request. 
 */
function responseHeader (error = false, reponse) {
    const defaultHeader = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
        "content-type": "application/json; charset=utf-8",
        "connection": "close",
        "Content-Security-Policy": "default-src 'none'",
        "Server": config.url+".com",
        "X-XSS-Protection": "1;mode=block",
        "Referrer-Policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "deny",
        "X-RateLimit-Limit": 60,
    };

    if (error) {
        return reponse.writeHead(404, {
            ...defaultHeader, 
            "Transfer-Encoding": "chunked",
            "Status": "404 not found",
        });
    }

    //TODO: Fill the empty data.
    return reponse.writeHead(200, {
        ...defaultHeader,
        "cache-control": "",
        "Etag": "",
        "Status": "200",
        "Vary": "accept",
        "Vary": "accept-encoding"
    });
}

module.exports = async (req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    const methodAllowed = ["GET", "POST", "PUT", "DELETE"];

    const routesAvailable = (await fs.promises.readdir(`${CWD}/server/api/routes`)).map(route => {
        if (path.basename(route, ".js") === "default")
            return "/";
        else
            return `/${path.basename(route, ".js")}`;
    });

    if (!routesAvailable.includes(pathname) || !methodAllowed.includes(req.method)) {
        responseHeader(true, res);

        res.end(JSON.stringify({
            status: 404,
            message: `Not found, you can check this url to see all routes and methods availables, https://${config.url}.com`
        }));
    }

    res.end(pathname);
}