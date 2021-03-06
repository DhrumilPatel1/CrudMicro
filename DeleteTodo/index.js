const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");
const isEmpty = require("./validation/is-empty");
const validateDeleteTodo = require("./validation/validationDeleteTodo");
exports.handler = async (event, context) => {
  try {
    let body = JSON.parse(event.body);
    var { errors, isValid } = validateDeleteTodo(body);
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing somefield",
        error: errors,
      });
    } else {
      await mongoDBClientConnect();
      var deleteTodo = await TodoModel.deleteOne({_id:body.id});
      return httpResponse.HttpResponse(200,  {
        message: "Todo Deleted Successfully",
        deleteTodo:deleteTodo
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500,  {
      message: "Intesrnal Server Error",
      error:error
    });
  }
};
