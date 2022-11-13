const { config } = require('./wdio.conf')
const path = require('path')

const geckoConfig = {
    ...config,
    services: ["geckodriver"],
    capabilities:[{
        maxInstances: 1,
        browserName: "firefox"
    }]
};

exports.config = geckoConfig