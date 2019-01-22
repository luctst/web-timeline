/**
 * Variables
 */
const fs = require("fs");
const path = require("path");

/**
 * Déclaration
 */
function getFile(res, ...file) { // TODO: Render file
    fs.readFile(path.resolve(file.toString()), (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
}

/**
 * Export
 */
module.exports = {
    getFile,
}