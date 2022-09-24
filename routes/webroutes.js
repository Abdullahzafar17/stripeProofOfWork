const {
  home,
  createAccount,
  createCustomer,
  createPayment,
  refundPayment,
  servicePlan
  } = require("../controllers/renders")


    
  module.exports = (router) => {
    router.route("/home").get(home)
    router.route("/account").get(createAccount)
    router.route("/customer").get(createCustomer)
    router.route("/payment").get(createPayment)
    router.route("/refund").get(refundPayment)
    router.route("/service").get(servicePlan)

  }