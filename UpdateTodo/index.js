const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
exports.handler = async (event, context) => {
  await mongoDBClientConnect()
  return httpResponse.HttpResponse(200, "my_value");
};
