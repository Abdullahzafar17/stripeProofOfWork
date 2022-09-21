
const provider = require("./provider")

module.exports = (router) => {
  provider(router)

  return router
}
