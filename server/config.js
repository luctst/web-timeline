const dotenv = require("dotenv");
const chalk = require("chalk");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
let url;

if (!envFound) {
    throw new Error(chalk`{red ⚠️  Couldn't find .env file  ⚠️}`);
}

if (process.env.NODE_ENV === "development") {
    url = "127.0.0.1";
} else {
    url = "https://apiurl.com/"; //TODO: Enter the apiurl to use for production
};

module.exports = {
    databaseUrl: process.env.DB_URL,
    databaseUser: process.env.DB_USER,
    databaseAccess: process.env.MONGO_KEY,
    url,
};