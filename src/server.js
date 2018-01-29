const debug = require('debug')('js-bot:server')
const net = require('net')


const server = net.createServer()

server.on('connection', (socket) => {
  debug('connection')

  let pong = 0

  socket.on('data', (data) => {
    try {
      data = JSON.parse(data)
      debug(data)

      if (data.channel === 'connection') {
        pong++
      }
      if (pong > 1) {
        socket
          .write(JSON.stringify({ channel: 'abort' }))
      }
    }
    catch (error) {
      throw error
    }
  })

  socket.on('end', () => {
    debug('disconnection')

    socket.end()
  })

  socket.on('error', (error) => {
    debug(error)

    socket.end()
  })

  socket
    .write(JSON.stringify({ channel: 'connection', msg: 'ping' }))
})

server.listen(9000, () => {
  debug('server created')
})
