const debug = require('debug')('js-bot:index')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}
