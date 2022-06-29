const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCreateTodo(data) {
  var errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.descriptions = !isEmpty(data.descriptions) ? data.descriptions : "";


      if (Validator.isEmpty(data.title)) {
          errors.email = `title is required`;
        }
        if (Validator.isEmpty(data.descriptions)) {
            errors.phnumber = `descriptions is required`;
        }
    

  return {
    errors,
    isValid: isEmpty(errors),
  };
};