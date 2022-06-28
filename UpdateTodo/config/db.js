const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

module.exports.mongoDBClientConnect = async function mongoDBClientConnect()
{
    const uri = 'mongodb+srv://dhrumil:dhrumil%40998@cluster0.blxmx.mongodb.net/test';
    try 
    {
        mongoose.connect(
            uri,
            { useNewUrlParser: true,useUnifiedTopology: true},
            function (err, db) {
              if (err) {
                console.log("MongoDB Database Connection Error", err);
              } else {
                console.log("MongoDB Connection Done!!");
              }
            }
          );
    }
    catch (error) 
    {
        console.log("mongoDBClientConnect: Database Error : " + error);
        throw error;
    }
}