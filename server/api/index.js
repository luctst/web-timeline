const url = require("url");

const config = require("../config");

/**
 * Create the response header
 * @param {Boolean} error If true reponse should return an 404 header.
 * @param {Object} reponse The reponse object return on http request.
 */
function responseHeader(error = false, reponse) {
  const defaultHeader = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers":
      "ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
    "content-type": "application/json; charset=utf-8",
    connection: "close",
    "Content-Security-Policy": "default-src 'none'",
    Server: `${config.url}.com`,
    "X-XSS-Protection": "1;mode=block",
    "Referrer-Policy":
      "origin-when-cross-origin, strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "deny",
    "X-RateLimit-Limit": 60
  };

  if (error) {
    return reponse.writeHead(404, {
      ...defaultHeader,
      "Transfer-Encoding": "chunked",
      Status: "404 not found"
    });
  }

  // TODO: Fill the empty data.
  return reponse.writeHead(200, {
    ...defaultHeader,
    "cache-control": "public, max-age=60, s-maxage=60",
    Etag: "",
    Status: "200",
    Vary: "accept",
    Vary: "accept-encoding" // eslint-disable-line no-dupe-keys
  });
}

module.exports = async (req, res, routesApi) => {
  req.on("error", error => {
    // Check if there is no error on request.
    res.statusCode = req.statusCode;

    res.end(
      JSON.stringify({
        status: req.statusCode,
        message: error.message
      })
    );
  });

  const { pathname, query } = url.parse(req.url, true);
  const methodAllowed = ["GET", "POST", "PUT", "DELETE"];

  if (!routesApi.includes(pathname) || !methodAllowed.includes(req.method)) {
    responseHeader(true, res);

    res.end(
      JSON.stringify({
        status: 404,
        message: `Not found, you can check this url to see all routes and methods availables, https://${config.url}.com`
      })
    );
  }

  // TODO: Redirect to the good api function who match the pathname property.
  res.end(pathname);
};
