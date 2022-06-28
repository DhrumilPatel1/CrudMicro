module.exports.handler = async (req, res) => {
  try {
  return {
    statusCode : 200,
    headers :
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    body : JSON.stringify({messgae:"ddddd"}),
    isBase64Encoded : false,
}  ;
  } catch (error) {
   
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