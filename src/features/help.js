const { Extra } = require('telegraf')
const { commands } = require('../utils/text')


async function handleCode({
  message, replyWithMarkdown,
}) {
  const text = `
    Description: To use it, type !code and start writing the code. 
    A WARNING! The bot does not know how to work with promises and timeouts. 
    To do this, you must first call the function explicitly. 
    Example! \`!code const rs = callback ();
    setTimeout (() => {
      rs (10)
    }, 1000)\`
  `

  replyWithMarkdown(
    text,
    Extra.inReplyTo(message.message_id),
  )
}

module.exports = (bot) => {
  bot.command(commands.help(), handleCode)
}
