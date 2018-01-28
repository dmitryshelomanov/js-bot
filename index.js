const debug = require('debug')('js-bot:index')
const Telegraf = require('telegraf')
const dotenv = require('dotenv')
const instalFeature = require('./src/utils/install-features')


dotenv.load()
const bot = new Telegraf(process.env.BOT_TOKEN)

debug('bot started')

instalFeature(bot)

bot.startPolling()
