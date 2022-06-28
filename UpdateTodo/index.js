const HttpResponse = require("./config/HttpResponse");
module.exports.handler =async function handler() {
    return HttpResponse(200,"my_value")
 
  }

  



