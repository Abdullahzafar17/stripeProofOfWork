const {
    createAccount
  } = require("../controllers/provider")
  
  module.exports = (router) => {
    router.route("/createAccount").post(createAccount)

  }
  