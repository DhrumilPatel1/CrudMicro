module.exports.handler = async function handler(req, res) {
  try {
   return {
    statusCode : statusCode,
    headers :
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    body : JSON.stringify({"a":"a"}),
    isBase64Encoded : false,
}
  } catch (error) {
      return  {
    statusCode : statusCode,
    headers :
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    body : JSON.stringify({"b":"b"}),
    isBase64Encoded : false,
}  ;
  }
};



