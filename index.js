const debug = require('debug')('js-bot:index')
const Telegraf = require('telegraf')
const { handlerCode } = require('./src/handlers/code')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

const bot = new Telegraf(process.env.BOT_TOKEN)

bot
  .hears(new RegExp(/!code/), handlerCode)
  .startPolling()
