const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");
exports.handler = async (event, context) => {
  console.log("EVENT",event,"AAA");
  await mongoDBClientConnect()
  var create = await TodoModel.create({title:"dd",descriptions:"descriptions"})
  return httpResponse.HttpResponse(200, "my_value");
};
