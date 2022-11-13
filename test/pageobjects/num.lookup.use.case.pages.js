const { Page } = require('./page')

class ContactCenterCasePage {
    contactCenterPageTitleLoc = 'h1 strong'
    contactCenterrTitleTxtLoc = 'Contact Center Solutions'
    joinIndustryLeadBtnLoc = 'main>div div:nth-child(2) [href="/contact-us"]'
    exploreCallControlLinkLoc = 'p>[href*="/voice-api"]'
    getEBookBtnLoc = '[href*="first-contact-center"]'
    signUpFor10BtnLoc = 'main [href="/sign-up"]'

    async contactCenterPageTitle () {
        return await $(this.contactCenterPageTitleLoc)
    }

    async contactCenterTitleTxt () {
        return await $(this.contactCenterrTitleTxtLoc)
    }

    async joinIndustryLeadBtn () {
        return await $(this.joinIndustryLeadBtnLoc)
    }

    async exploreCallControlLink () {
        return await $(this.exploreCallControlLinkLoc)
    }

    async getEBookBtn () {
        return await $(this.getEBookBtnLoc)
    }

    async signUpFor10Btn () {
        return await $(this.signUpFor10BtnLoc)
    }
}

class TwoFactAuthCasePage extends Page {
    pageTitleLoc = 'h1 span'
    flexPrivatNetSubtitleLoc = 'header h2:nth-child(2)'
    tryItFreeBtnLoc = 'div:nth-child(7) [href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async flexPrivatNetSubtitle () {
        return await $(this.flexPrivatNetSubtitleLoc)
    }

    async tryItFreeBtn () {
        return await $(this.tryItFreeBtnLoc)
    }
}

class SmsMarketCasePage extends Page {
    smsMarketPageTitle = 'h1>span'
    smsMarketPlatformSubtitleLoc = 'header>h2:nth-child(2)'
    seeAllProdLinkLoc = 'main [href="/products"]'
    tryItFreeBtnLoc = 'div:nth-child(7) [href="/sign-up"]'

    async pageTitle () {
        return await $(this.smsMarketPageTitle)
    }

    async smsMarketPlatformSubtitle () {
        return await $(this.smsMarketPlatformSubtitleLoc)
    }

    async seeAllProdLink () {
        return await $(this.seeAllProdLinkLoc)
    }

    async tryItFreeBtn () {
        return await $(this.tryItFreeBtnLoc)
    }
}

class CallTrackCasePage extends Page {
    callTrackPageTitle = 'h1>span'
    gainInsightChannelLoc = 'header>h2:nth-child(2)'
    seeAllProdLinkLoc = 'main [href="/products"]'
    tryItFreeBtnLoc = 'main [href="/sign-up"]'

    async pageTitle () {
        return await $(this.callTrackPageTitle)
    }

    async gainInsightChannel () {
        return await $(this.gainInsightChannelLoc)
    }

    async seeAllProdLink () {
        return await $(this.seeAllProdLinkLoc)
    }

    async tryItFreeBtn () {
        return await $(this.tryItFreeBtnLoc)
    }
}

module.exports = {
    ContactCenterCasePage: ContactCenterCasePage,
    contactCenterCasePage: new ContactCenterCasePage,
    TwoFactAuthCasePage: TwoFactAuthCasePage,
    twoFactAuthCasePage: new TwoFactAuthCasePage,
    SmsMarketCasePage: SmsMarketCasePage,
    smsMarketCasePage: new SmsMarketCasePage,
    CallTrackCasePage: CallTrackCasePage,
    callTrackCasePage: new CallTrackCasePage
}