const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const UserModel = require("./Model/User");
const isEmpty = require("./validation/is-empty");
const validateCreateUser = require("./validation/validationCreateUser");
exports.handlerRegister = async (event, context) => {
  try {
    let body = JSON.parse(event.body);
    var { errors, isValid } = validateCreateUser(body);
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing somefield",
        error: errors,
      });
    } else {
      await mongoDBClientConnect();
      var createUser = await UserModel.create(body);
      return httpResponse.HttpResponse(200, {
        message: "User Registered",
        createUser: createUser,
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500, {
      message: "Intesrnal Server Error",
      error: error,
    });
  }
};
