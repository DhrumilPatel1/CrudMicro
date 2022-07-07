const { mongoDBClientConnect } = require("./config/db");
const httpResponse = require("./config/HttpResponse");
const Customer = require("./Model/Customer");
const isEmpty = require("./validation/is-empty");
const validateCreateUser = require("./validation/validationCreateUser");
const validateLogin = require("./validation/validationLogin");
exports.handlerRegister = async (event, context) => {
  try {
    var body = JSON.parse(event.body);
    await mongoDBClientConnect();

    var { errors, isValid } = validateCreateUser(body);
    if (!isEmpty(body.email)) {
      var findCustomer = await Customer.findOne({ email: body.email });
      if (findCustomer) {
        errors.email = "Your Email is already exist";
      }
    }
    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing  somefield",
        error: errors,
      });
    } else {
      var Customer = await Customer.create(body);
      return httpResponse.HttpResponse(200, {
        message: "User Registered",
        Customer: Customer,
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500, {
      message: "Intesrnal Server Error",
      error: error,
    });
  }
};

exports.handlerLogin = async (event, context) => {
  try {
    var body = JSON.parse(event.body);
    await mongoDBClientConnect();

    var { errors, isValid } = validateLogin(body);

    if (!isEmpty(errors)) {
      return httpResponse.HttpResponse(422, {
        message: "missing  somefield",
        error: errors,
      });
    } else {
      var findCustomer = await Customer.findOne({ email: body.email });

      if (findCustomer == null || findCustomer.password != body.password) {
        return httpResponse.HttpResponse(422, {
          message: "Check You credential",
        });
      }

      // var createUser = await UserModel.create(body);
      return httpResponse.HttpResponse(200, {
        message: "User SuccessFully Login",
      });
    }
  } catch (error) {
    return httpResponse.HttpResponse(500, {
      message: "Intesrnal Server Error",
      error: error,
    });
  }
};
