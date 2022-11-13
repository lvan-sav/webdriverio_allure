const { config } = require('./wdio.selenium.stand.conf.js')
const path = require("path")

const dockerConfig = {
    ...config,
    services: ['docker'],
    hostname: 'localhost',
    port: 4444,
    path: '/'
}

exports.config = dockerConfig