const status = require("http-status")
const APIError = require("../utils/APIError")

module.exports = (err, req, res, next) => {
  let error
  console.log(err)
  if (err instanceof APIError) error = new APIError(err.message, err.statusCode)
  else
    error = new APIError("internal Server Error", status.INTERNAL_SERVER_ERROR)
  res.status(error.statusCode).json({
    status: "Successful",
    error: true,
    data: {
      message: error.message
    }
  })
}
