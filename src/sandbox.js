const debug = require('debug')('js-bot:sandbox')
const { resolve } = require('path')
const fs = require('fs-extra')
const uid = require('./utils/uid')
const { asyncExec } = require('./utils/exec-promisify')
const { boilerplateGenerated } = require('./utils/boilerplate-code')


async function createSandbox(strCode) {
  const fileName = `${uid()}.js`
  const path = resolve(__dirname, '..', 'tmp', fileName)
  const code = boilerplateGenerated(strCode)

  try {
    debug('path - ', path)
    await fs.writeFile(path, code)
    const rs = await asyncExec(`node tmp/${fileName}`)

    await fs.unlink(path)
    return rs
  }
  catch (error) {
    await fs.unlink(path)
    throw error
  }
}

module.exports = {
  createSandbox,
}
