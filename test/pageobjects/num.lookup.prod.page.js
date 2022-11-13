const { Page } = require('./page')


const aboveSignUpBtn = 'main div:nth-child(4) [href="/sign-up"]'
const belowContactUsBtn = 'div:nth-child(3) [href*="contact-us"]'
const tryForFreeBtn = 'div:nth-child(7) [href="/sign-up"]'
const talkExpertsBelowTryFreeLink = 'div:nth-child(7) [href*="/contact-us"]'

const contactCenterCaseBlock = 'main [href*="contact-center"]'
const twoFactAuthCaseBlock = "[href*='/two-factor-authentication']"
const smsMarketCaseBlock = '[href*="/sms-marketing"]'
const callTrackCaseBlock = 'main [href*="/call-tracking"]'

const exploreDocsBtn = 'div>[href*="api/v2/number-lookup"]'
const exploreGuidesBtn = '[href*="/docs/v2/messaging"]'

class NumLookupProdPage extends Page {
    async aboveSignUpBtnClick () {
        await this.openPage(aboveSignUpBtn)
    }

    async belowDocsContactBtnClick () {
        await this.openPage(belowContactUsBtn)
    }

    async tryForFreeBtnClick () {
        await this.openPage(tryForFreeBtn)
    }

    async talkExpertsBelowTryFreeLinkClick () {
        await this.openPage(talkExpertsBelowTryFreeLink)
    }

    async openContactCenterCasePage () {
        await this.openPage(contactCenterCaseBlock)
    }

    async openTwoFactAuthCaseBlock () {
        await this.openPage(twoFactAuthCaseBlock)
    }

    async openSmsMarketCasePage () {
        await this.openPage(smsMarketCaseBlock)
    }

    async openCallTrackCasePage () {
        await this.openPage(callTrackCaseBlock)
    }

    async openNumLookupOverviewDocPage () {
        await this.openPage(exploreDocsBtn)
    }

    async openMsgDocPage () {
        await this.openPage(exploreGuidesBtn)
    }
}

module.exports = {
    NumLookupProdPage: NumLookupProdPage,
    numLookupProdPage: new NumLookupProdPage
}