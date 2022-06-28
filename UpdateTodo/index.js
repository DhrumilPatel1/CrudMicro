const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {

    var obj = {
      message: "Todo is Updated",
    };
   return httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Intsessrnal Server Error",
    };
  return  httpResponse(500, obj);
  }
};



