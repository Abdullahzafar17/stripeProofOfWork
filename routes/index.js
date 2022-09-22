
const provider = require("./provider")
const webRenders = require('./webroutes')

module.exports = (router) => {
  provider(router)
  webRenders(router)
  return router
}
