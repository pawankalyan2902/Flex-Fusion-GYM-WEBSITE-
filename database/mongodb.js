const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient

let database;
async function createdatabase()
{
     dbs= await mongoClient.connect("mongodb://localhost:27017/myapp");
     database=dbs.db("gym");
}

function getdb()
{
    return database;
}

module.exports={
    createdatabase:createdatabase,
    getdb:getdb
}