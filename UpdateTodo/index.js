const httpResponse = require("./config/HttpResponse");
exports.handler = async (event, context) =>
{
    return httpResponse.HttpResponse(200,"my_value")
 
  }

  



