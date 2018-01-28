module.exports = {
  commands: {
    code: () => /!code/,
  },
  error: {
    timeOut: () => '`Request is long`',
    handleType: (error) => (
      '1'
    ),
    getResult: (rs) => `\`${JSON.stringify(rs)}\``,
  },
}
