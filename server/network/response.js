const chalk = require('chalk')

const success = (req, res, message, status) => {
  console.log(message)

  res.status(status || 200).send({
    error: '',
    body: message,
  })
}
const error = (req, res, message, status, details) => {
  console.error(chalk.red(`[RES ERROR] - ${details}`))

  res.status(status || 500).send({
    error: message,
    body: '',
  })
}

module.exports = {
  success,
  error,
}
