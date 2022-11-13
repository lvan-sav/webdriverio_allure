const { config } = require('./wdio.conf')

const seleniumStandConf = {
    ...config,
    maxInstances: 3,
    capabilities: [{
        maxInstances: 6,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args:[
                '--headless'
            ]}
    },
    {
        browserName: 'firefox',
        maxInstances: 6,
        'moz:firefoxOptions': {
            args:[
                "-headless"
            ]
        }
    },
    {
        browserName: "MicrosoftEdge",
        maxInstances: 6,
        "ms:edgeOptions": {
            args:[
                "-headless"
            ]
        }
    }],
    services: ['selenium-standalone']
}

exports.config = seleniumStandConf