const debug = require('debug')('js-bot:handle-code')
const { Extra } = require('telegraf')
const { createSandbox } = require('../sandbox')

async function handlerCode({ 
  reply, message,
}) {
  debug('run execute code')

  const codeStr = message.text.split('!code')[1]
  const rs = await createSandbox(codeStr)
  
  reply(rs, Extra.inReplyTo(message.message_id))
}

module.exports = {
  handlerCode,
}
