const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {

    var obj = {
      message: "List Of todo",
    };
    httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Internal Server Error",
    };
    httpResponse(500, obj);
  }
};