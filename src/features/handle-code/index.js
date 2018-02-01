const debug = require('debug')('js-bot:handle-code')
const { Extra } = require('telegraf')
const { commands, error: errorNotify } = require('../../utils/text')
const { createSandbox } = require('../../sandbox')


async function handleCode({
  message, replyWithMarkdown,
}) {
  debug('run execute code')

  try {
    const codeStr = message.text.split('!code')[1]
    const rs = await createSandbox(codeStr)

    replyWithMarkdown(
      errorNotify.getResult(rs),
      Extra.inReplyTo(message.message_id),
    )
  }
  catch (error) {
    replyWithMarkdown(
      errorNotify.handleType(error),
      Extra.inReplyTo(message.message_id),
    )
  }
}

module.exports = (bot) => {
  bot.hears(commands.code(), handleCode)
}
