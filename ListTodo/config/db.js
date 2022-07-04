const mongoose = require("mongoose");

module.exports.mongoDBClientConnect = async function mongoDBClientConnect()
{
    const uri = process.env.MONGO_URI;
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