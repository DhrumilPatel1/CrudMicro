module.exports.handler = async function handler (req, res){
  try {
  return {
    statusCode : 200,
    headers :"anything",
    body : JSON.stringify({messgae:"ddddd"}),
    isBase64Encoded : false,
}  ;
  } catch (error) {
   
   return  {
    statusCode : 500,
    headers :"anything",
    body : JSON.stringify({messgae:"ddddd"}),
    isBase64Encoded : false,
} ;
  }
};