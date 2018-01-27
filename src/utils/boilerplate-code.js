const debug = require('debug')('js-bot:boilerplate-code')


function boilerplateGenerated(code) {
  debug('template formated')
  return `
    const vm = require('vm')
    const sandbox = {
      console,
      setTimeout,
    }
    vm.createContext(sandbox)
    vm.runInContext(\`${code}\`, sandbox)
  `
}

module.exports = {
  boilerplateGenerated,
}
