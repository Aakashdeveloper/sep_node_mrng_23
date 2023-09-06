let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://127.0.0.1:27017";
let db;

function dbConnection(){
    MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client) => {
        if(err) console.log(`Error While Connecting to Mongo`);
        db = client.db('sepnode') // database name
        console.log(`Connected to sepnode`)
    })
}

async function getData(colName,query){
    return await db.collection(colName).find(query).toArray()
}


module.exports = {
    dbConnection,
    getData
}