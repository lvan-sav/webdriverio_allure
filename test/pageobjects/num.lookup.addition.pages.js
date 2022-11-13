const { Page } = require('./page')

class NumLookupOverviewDocPage extends Page {
    numberDocsPageTitle = '#telnyx-api-reference div>span'
    runPostmanBtnLoc = '//img[@alt="Run in Postman"]/..'
    httpEndpointsTitleLoc = 'h4#http-endpoints'

    async pageTitle () {
        return await $(this.numberDocsPageTitle)
    }

    async runPostmanBtn () {
        return await $(this.runPostmanBtnLoc)
    }

    async httpEndpointsTitle () {
        return await $(this.httpEndpointsTitleLoc)
    }
}

class MsgDocPage extends Page {
    msgApiPageTitle = 'h1#messaging'
    seeTheSpecsBtnLoc = 'main [href="/docs/api/v2/messaging"]'
    sendYouSmsLoc = 'main [href*="/quickstarts/portal-setup"]'

    async pageTitle () {
        return await $(this.msgApiPageTitle)
    }

    async seeTheSpecsBtn () {
        return await $(this.seeTheSpecsBtnLoc)
    }

    async sendYouSms () {
        return await $(this.sendYouSmsLoc)
    }
}

module.exports = {
    NumLookupOverviewDocPage: NumLookupOverviewDocPage,
    numLookupOverviewDocPage: new NumLookupOverviewDocPage,
    MsgDocPage: MsgDocPage,
    msgDocPage: new MsgDocPage
}