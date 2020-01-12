const config = require("./config");
const portfinder = require("portfinder");
const http = require("http");
const chalk = require("chalk");
const api = require("./api/index");

let server;

async function getAvailablePort(reqPort) {
    const baseport = parseInt(reqPort, 10);
    const port = await portfinder.getPortPromise({ port: baseport });

    return port;
};

getAvailablePort(5000).then(port => {
    config.port = port;

    server = http.createServer(api);

    server.listen({
        port: config.port,
        host: config.url
    }, () => {
        console.info(chalk`
        You can now using {bold web-timeline} server.

            {bold Api}: http://${config.url}:${config.port}/
            {bold Database}: ${config.databaseUrl}
        
        Note that the development build is not optimized.
        To create a production build, use {blue npm run build:back}.
        `);
    });
});

["SIGINT", "SIGTERM"].forEach(signal => {
    process.on(signal, () => {
        console.log(chalk`{yellow Server closed, see you :)}`);
        process.exit();
    });
})