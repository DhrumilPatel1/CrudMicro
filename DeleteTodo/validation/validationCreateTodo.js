const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDeleteTodo(data) {
  var errors = {};

  data.id = !isEmpty(data.id) ? data.id : "";

  if (Validator.isEmpty(data.id)) {
    errors.id = `id is required`;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
