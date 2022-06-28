const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  try {
    var obj = {
      message: "Todo is Updated",
    };
    httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Intesrssnal Server Error",
    };
    httpResponse(500, obj);
  }
};



