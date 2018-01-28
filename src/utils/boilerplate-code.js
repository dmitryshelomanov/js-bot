const debug = require('debug')('js-bot:boilerplate-code')
const et = require('./escape-tilde')


function boilerplateGenerated(code) {
  debug('template formated')
  return `
    const vm = require('vm')
    const sandbox = require('../src/utils/context')

    vm.createContext(sandbox)
    vm.runInContext(\`${et(code)}\`, sandbox)
  `
}

module.exports = {
  boilerplateGenerated,
}
