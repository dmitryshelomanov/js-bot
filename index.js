const debug = require('debug')('js-bot:index')
const Telegraf = require('telegraf')
const { handlerCode } = require('./src/handlers/code')

require('dotenv').load()


const bot = new Telegraf(process.env.BOT_TOKEN)

debug('Bot created!')

bot
  .hears(/!code/, handlerCode)
  .command('help', ({ replyWithMarkdown }) => replyWithMarkdown(`
*js sandbox bot*
responds to a message of the form
\`!code you_js_code\` \n
Context have
_setTimeout_
_Promise_
_console_ \n
*Notice*
\`if you're request have a long (> 10s) bot throws an exception\`
`))
  .startPolling()

debug('Bot started!')
