const { resolve } = require('path')
const fs = require('fs-extra')
const { asyncExec } = require('./utils/exec-promisify')
const { boilerplateGenerated } = require('./utils/boilerplate-code')


async function createSandbox(code) {
  try {
    const path = resolve(__dirname, '..' ,'tmp', 'index.js')
    const code = boilerplateGenerated(strCode)

    await fs.writeFile(path, code)
    const rs = await asyncExec('node tmp/index.js')

    await fs.unlink(path)
    return rs
  }
  catch(error) {
    throw error
  }
}

module.exports = {
  createSandbox,
}