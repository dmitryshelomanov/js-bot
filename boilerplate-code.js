function boilerplateGenerated(code) {
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
