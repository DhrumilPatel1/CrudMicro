const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {

    var obj = {
      message: "List Of todo",
    };
   return httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Inteaaaaanal Server Error",
    };
   return httpResponse(500, obj);
  }
};