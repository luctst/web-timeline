/* eslint-disable no-console */
const portfinder = require("portfinder");
const fs = require("fs");
const path = require("path");
const http = require("http");
const chalk = require("chalk");

const config = require("./config");
const api = require("./api/index");

const CWD = process.cwd();

/**
 * Check if `reqPort` is available if not return an available port to use.
 * @param {Number} reqPort The port to check.
 * @returns An integer who correspont to an available port.
 */
async function getAvailablePort(reqPort) {
  const baseport = parseInt(reqPort, 10);
  const port = await portfinder.getPortPromise({ port: baseport });

  return port;
}

/**
 * Start the NodeJs http server.
 * @param {Array} routesApi An array of string who contains the api endpoints available.
 */
function startServer(routesApi) {
  http
    .createServer((req, res) => api(req, res, routesApi))
    .listen(
      {
        port: config.port,
        host: config.url
      },
      () => {
        console.info(chalk`
        You can now using {bold web-timeline} server.

            {bold Api}: http://${config.url}:${config.port}/
            {bold Database}: ${config.databaseUrl}
        
        Note that the development build is not optimized.
        To create a production build, use {blue npm run build:back}.
        `);
      }
    );
}

/**
 * Return an array of string who contains the api routes list.
 * @param {String} path The directory to parse
 */
async function getRoutesApi(directoryPath) {
  return (await fs.promises.readdir(directoryPath)).map(route => {
    if (path.basename(route, ".js") === "default") return "/";
    return `/${path.basename(route, ".js")}`;
  });
}

// Start the config and server.
(async () => {
  config.port = await getAvailablePort(5000);
  const routes = await getRoutesApi(`${CWD}/server/api/routes`);

  startServer(routes);
})();

["SIGINT", "SIGTERM"].forEach(signal => {
  process.on(signal, () => {
    console.log(chalk`{yellow Server closed, see you :)}`);
    process.exit();
  });
});
