const httpResponse = require("./config/HttpResponse");
module.exports.handler = async (req, res) => {
  var obj ={}
  try {
    obj = {
      message: "Todo is Created",
    };
  return {
    statusCode : 200,
    headers :
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    body : JSON.stringify(obj),
    isBase64Encoded : false,
}  ;
  } catch (error) {
    obj = {
      message: "Inteaaaaaarnal Server Error",
    };
   return  {
    statusCode : 500,
    headers :
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    body : JSON.stringify(obj),
    isBase64Encoded : false,
} ;
  }
};