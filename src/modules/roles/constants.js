const error = require("http-errors-promise");
const httpError = error.httpError;
const CONSTANTS = {
  MODEL: "roles",
  PATH: "/roles",
};
const ERRORS = {
  LOGIN_ERRED: httpError(500, "Error logging in."),
  EMAIL_DOESNT_EXIST: httpError(404, "Email does not exist."),
  INVALID_CREDENTIALS: httpError(401, "Invalid email or password."),
  DUPLICATE_EMAIL: httpError(400, "An account exists with this email."),
  DUPLICATE_PHONE: httpError(400, "This phone number is already registered, choose another number."),
  CREATE_ERRED: httpError(500, "Error creating user"),
  INVALID_OTP: httpError(401, "Invalid OTP"),
  INTERNAL_SERVER: httpError(500, "Internal server error"),
  DUPLICATE_PHONE_NUMBER: httpError(
    400,
    "An account exists with this phone number."
  ),
  INVALID_PHONE: httpError(500, "Phone number invalid."),
};

module.exports = Object.freeze({
  ...CONSTANTS,
  ERRORS,
});