const features = require('../features')


module.exports = (bot) => {
  features.forEach((f) => f(bot))
}
