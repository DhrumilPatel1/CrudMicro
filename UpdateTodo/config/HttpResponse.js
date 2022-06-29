function HttpResponse(code, value,response) {
  console.log("CALLED");
  return {
    statusCode: code,
    headers:
    {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
        "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(response),
    isBase64Encoded: false,
  };
}

module.exports = {
  HttpResponse,
};
