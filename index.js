const { resolve } = require('path')
const fs = require('fs-extra')
const { asyncExec } = require('./src/utils/exec-promisify')
const { boilerplateGenerated } = require('./src/utils/boilerplate-code')


const strCode = `
  setTimeout(() => {
    console.log('done')
  }, 500)
`

async function main() {
  try {
    const path = resolve(__dirname, 'tmp', 'index.js')
    const code = boilerplateGenerated(strCode)

    await fs.writeFile(path, code)
    const rs = await asyncExec('node tmp/index.js')

    await fs.unlink(path)
    console.log(rs)
  }
  catch(error) {
    throw error
  }
}

main()