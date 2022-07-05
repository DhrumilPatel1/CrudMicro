const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCreateTodo(data) {
  var errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = `username is required`;
  }
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
