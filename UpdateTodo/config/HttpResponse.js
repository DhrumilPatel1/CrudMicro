function HttpResponse(code, value,response) {
  console.log("CALLED");
  return {
    statusCode: code,
    headers: {
      my_header: value,
    },
    body: JSON.stringify(response),
    isBase64Encoded: false,
  };
}

module.exports = {
  HttpResponse,
};
