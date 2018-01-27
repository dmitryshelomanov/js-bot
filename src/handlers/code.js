const debug = require('debug')('js-bot:handle-code')
const { Extra } = require('telegraf')
const { createSandbox } = require('../sandbox')

async function handlerCode({ 
  message, replyWithMarkdown,
}) {
  debug('run execute code')

  try {
    const codeStr = message.text.split('!code')[1]
    const rs = await createSandbox(codeStr)
    
    replyWithMarkdown(
      `\`${rs || 'non result'}\``, 
      Extra.inReplyTo(message.message_id),
    )
  }
  catch(error) {
    const err = error.message.split('at ')[0]

    debug('error', error)
    replyWithMarkdown(
      `\`${err}\``, 
      Extra.inReplyTo(message.message_id),
    )
  }
}

module.exports = {
  handlerCode,
}
