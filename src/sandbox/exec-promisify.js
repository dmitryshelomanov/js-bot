const { exec } = require('child_process')


function asyncExec(command) {
  return new Promise((res, rej) => {
    exec(command, (err, stdout) => {
      if (err) {
        return rej(err)
      }
      return res(stdout)
    })
  })
}

module.exports = {
  asyncExec,
}
