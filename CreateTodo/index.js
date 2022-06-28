const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {
    var obj = {
      message: "Todo is Created",
    };
  return  httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Inteaaaaaarnal Server Error",
    };
   return httpResponse(500, obj);
  }
};