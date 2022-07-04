const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");

exports.handler = async (event, context) => {
  try {
    let body = JSON.parse(event.body);
    
      await mongoDBClientConnect();
      var TodoList = await TodoModel.find();
      return httpResponse.HttpResponse(200,  {
        message: "Todo Created Successfully",
        TodoList:TodoList
      });
    
  } catch (error) {
    return httpResponse.HttpResponse(500,  {
      message: "Intesrnal Server Error",
      error:error
    });
  }
};
