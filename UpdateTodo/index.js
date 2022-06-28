module.exports.handler =async function handler() {
  console.log("I asassssssddddsadasdddaaM  Dhrsadfgdsasumil Patel");

  return {
      "statusCode": 200,
      "headers": {
          "my_header": "my_value"
      },
      "body": JSON.stringify({"A":"a","B":"b"}),
      "isBase64Encoded": false
  };
}


