const { exec } = require('child_process')

function asyncExec(command) {
  return new Promise((res, rej) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        rej(err)
        return
      }
      res(stdout)
    })
  })
}

module.exports = {
  asyncExec,
}
