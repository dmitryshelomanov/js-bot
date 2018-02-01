const { Extra } = require('telegraf')
const { commands } = require('../utils/text')


async function handleCode({ message, replyWithMarkdown }) {
  const text = `Description: To use it, type !code and start writing the code.
WARNING! The bot does not know how to work with promises and timeouts.
For do this, you should call the function explicitly first.
The example!
\`!code console.log(
const rs = callback()
setTimeout (() => {
  rs (10)
}, 1000)
)\``

  replyWithMarkdown(
    text,
    Extra.inReplyTo(message.message_id),
  )
}

module.exports = (bot) => {
  bot.command(commands.help(), handleCode)
}
