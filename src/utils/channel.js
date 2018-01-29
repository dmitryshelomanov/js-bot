const { error } = require('./text')


function abort(data, socket, process) {
  console.log(error.timeOut())
  socket.end()
  process.exit(0)
}

function success(data, socket, process) {
  socket.end()
  process.exit(0)
}


module.exports = {
  abort,
  success,
}
