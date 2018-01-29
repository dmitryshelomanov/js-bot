module.exports = {
  commands: {
    code: () => /!code/,
  },
  error: {
    timeOut: () => 'Request is long 😤',
    handleType: (error) => (
      '`Oops! Error 🤔`'
    ),
    getResult: (rs) => `\`${JSON.stringify(rs)}\``,
  },
}
