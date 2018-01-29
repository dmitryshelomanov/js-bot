module.exports = {
  commands: {
    code: () => /!code/,
    help: () => '/help',
  },
  error: {
    timeOut: () => 'Request is long 😤',
    handleType: (error) => (
      '`Oops! Error 🤔`'
    ),
    getResult: (rs) => `\`${JSON.stringify(rs)}\``,
  },
}
