const debug = require('debug')('js-bot:boilerplate-code')
const et = require('../utils/escape-tilde')


function childProcess(code) {
  debug('template formated')

  return `
    const { VM } = require('vm2')
    const net = require('net')
    const ctx = require('../src/sandbox/context')
    const handlerChannel = require('../src/utils/channel')

    const socket = new net.Socket()   
    
    socket.connect(9000, 'localhost', () => {
      setInterval(() => {
        socket
          .write(JSON.stringify({ channel: 'connection', msg: 'pong'}))
      }, 3000)
    })
    socket.on('data', (data) => {
      try {
        data = JSON.parse(data)
    
        if (handlerChannel[data.channel]) {
          handlerChannel[data.channel](data, socket, process)
        }
      }
      catch (error) {}
    })
    socket.on('error', () => {
      socket.end()
      process.exit(0)
    })

    let isCb = false

    const vm = new VM({
      timeout: 1000,
      sandbox: {
        ...ctx,
        callback: () => {
          isCb = true
          return (userFn) => {
            console.log(userFn || null)
            handlerChannel.success(null, socket, process)
          }
        }
      },
    })

    vm.run(\`${et(code)}\`)
    
    if (!isCb) {
      handlerChannel.success(null, socket, process)
    }
  `
}

module.exports = {
  childProcess,
}
