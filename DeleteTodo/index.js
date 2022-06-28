const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {
    await mongoDBClientConnect()

    var obj = {
      message: "Todo is Deleted",
    };
    httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Internal Server Error",
    };
    httpResponse(500, obj);
  }
};