const { isCommand } = require('../../lib/command')
const { execStrategy, getStrategies } = require('../../lib/strategies')
const path = require('path')

const name = 'adduser'

const strategies = getStrategies(path.join(__dirname, '**/*.strategy.js'))

const test = isCommand(name)

const exec = execStrategy(strategies)

module.exports = {
  sort: 10,
  test,
  exec,
  name
}
