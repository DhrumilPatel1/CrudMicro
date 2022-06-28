const HttpResponse = require("./config/HttpResponse");
module.exports.handler =async function handler() {
  try {
    return HttpResponse(200,"my_value")
  } catch (error) {
    return {
      "statusCode": 500,
      "headers": {
          "my_header": "my_value"
      },
      "body": JSON.stringify({"A":"SERVER ERROR"}),
      "isBase64Encoded": false
  };
  }
  console.log("I asassssssddddsadasdddaaM  Dhrsadfgdsasumil Patel");

  
}


