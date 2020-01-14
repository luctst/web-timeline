const {MongoClient} = require("mongodb");
const config = require("../config");

const uri = `mongodb+srv://${config.databaseUser}:${config.databaseAccess}@web-timeline-dvcrh.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = async () => {
    const connexion = await client.connect();
    return await connexion.db("web-timeline");
};