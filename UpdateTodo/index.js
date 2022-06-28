module.exports.handler =async function handler() {
  try {
    return {
      "statusCode": 200,
      "headers": {
          "my_header": "my_value"
      },
      "body": JSON.stringify({"A":"SUCCESSFULLY"}),
      "isBase64Encoded": false
  };
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


