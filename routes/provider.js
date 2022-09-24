const {
    createAccount,
    addProduct
  } = require("../controllers/provider")
  
  
  module.exports = (router) => {
    router.route("/createAccount").post(createAccount)
    router.route("/addProduct").post(addProduct)
    
  }
  