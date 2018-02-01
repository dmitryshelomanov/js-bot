module.exports = {
  commands: {
    code: () => /!code/,
    help: () => '/help',
  },
  error: {
    timeOut: () => 'Request is long 😤',
    handleType: (_) => (
      '`Oops! Error 🤔`'
    ),
  },
  getResult: (rs) => `\`${JSON.stringify(rs)}\``.replace('\\n', ''),
}
