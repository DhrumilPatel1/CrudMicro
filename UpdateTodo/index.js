const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");
const isEmpty = require("./validation/is-empty");
const validateCreateTodo = require("./validation/validationCreateTodo");
exports.handler = async (event, context) => {
  try {
    console.log("EVENT", event, "AAA");
    var { errors, isValid } = validateCreateTodo(event);
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, "my_value", {
        message: "missing somefield",
        error: errors,
      });
    } else {
      await mongoDBClientConnect();
      var create = await TodoModel.create(event);
      return httpResponse.HttpResponse(200, "my_value", {
        message: "Todo Created Successfully",
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500, "my_value", {
      message: "Internal Server Error",
    });
  }
};
