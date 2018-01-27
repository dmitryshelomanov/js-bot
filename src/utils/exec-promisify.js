const { exec, } = require('child_process')
const kill = require('tree-kill')


function asyncExec(command) {
  let timer = null

  return new Promise((res, rej) => {
    const child = exec(command, (err, stdout, stderr) => {
      if (err) {
        return rej(err)
      }
      clearInterval(timer)
      res(stdout)
    })

    timer = setTimeout(() => {
      rej({ message: 'time out' })
      kill(child.pid)
    }, 10000)
  })
}

module.exports = {
  asyncExec,
}
