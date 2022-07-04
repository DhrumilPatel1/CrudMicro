const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");
const isEmpty = require("./validation/is-empty");
const validateCreateTodo = require("./validation/validationCreateTodo");
exports.handler = async (event, context) => {
  try {
    let body = JSON.parse(event.body);
    console.log("EVENT", event, "AAA");
    var { errors, isValid } = validateCreateTodo(body);
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing somefield",
        error: errors,
      });
    } else {
      await mongoDBClientConnect();
      var createTodo = await TodoModel.create(body);
      return httpResponse.HttpResponse(200,  {
        message: "Todo Created Successfully",
        createTodo:createTodo
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500,  {
      message: "Intesrnal Server Error",
      error:error
    });
  }
};
