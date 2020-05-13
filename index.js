require('dotenv').config()
const argv = require('yargs').argv
const nexmo = new (require('nexmo'))({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
}).message

const from = '16149271839'
nexmo.sendSms(from, argv.to, argv.text)