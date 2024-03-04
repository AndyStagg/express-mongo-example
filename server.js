const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.get('/', async (req, res) => {

    const client = new MongoClient("mongodb://dev:mongodev@192.168.1.136:30501/");

    try {
        await client.connect();

        databaseList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databaseList.databases.forEach(db => console.log(` - ${db.name}`));
    } 
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
    
    res.send('Successful Response.');
});

app.listen(3000, () => console.log('Exmaple app is listening on port 3000'));