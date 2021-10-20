const timeoutSlowTest = 10000
const timeouTest = 120000

module.exports = {
  require: [
    'ts-node/register',
    'dotenv/config'
  ],
  spec: './spec/**/*.spec.ts',
  slow: timeoutSlowTest,
  timeout: timeouTest,
  reporter: 'mocha-multi-reporters',
  reporterOptions: ['configFile=reporterConfig.json']
}