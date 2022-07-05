const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLogin(data) {
  var errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


  if (Validator.isEmpty(data.email)) {
    errors.email = `email is required`;
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = `password is required`;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
