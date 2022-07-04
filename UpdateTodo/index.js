const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const TodoModel = require("./Model/Todo");
const isEmpty = require("./validation/is-empty");
const validateCreateTodo = require("./validation/validationCreateTodo");
exports.handler = async (event, context) => {
  try {
    let body = JSON.parse(event.body);
    var { errors, isValid } = validateCreateTodo(body);
    await mongoDBClientConnect();
    var findId = await TodoModel.findOne({ _id: body.id });

    if (!findId) {
      errors.id = "Id is invalid";
    }
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing somefield",
        error: errors,
      });
    } else {
      var create = await TodoModel.updateOne({ _id: body.id }, body);
      return httpResponse.HttpResponse(200, {
        message: "Todo Updated Successfully",
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500, {
      message: "Intesrnal Server Error",
      error: error,
    });
  }
};
