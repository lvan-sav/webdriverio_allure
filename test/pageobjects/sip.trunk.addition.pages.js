const { Page } = require("./page");

class GlobalIpPage extends Page {
    pageTitleLoc = 'h1>span'
    tryNetworkBtnLoc = 'main div:nth-child(3) [href="/sign-up"]'
    pricingBtnLoc = 'main [href="/pricing"]'
    startFreeTrialBtnLoc = 'main div:nth-child(2) [href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async tryNetworkBtn () {
        return await $(this.tryNetworkBtnLoc)
    }

    async pricingBtn () {
        return await $(this.pricingBtnLoc)
    }

    async startFreeTrialBtn () {
        return await $(this.startFreeTrialBtnLoc)
    }
}

class SipTrunkPricePage extends Page {
    downloadForm = '#pricing_download_form'
    firstNameInp = 'form>div:nth-child(1) input'
    lastNameInp = 'form>div:nth-child(2) input'
    emailInp = 'form>div:nth-child(3) input'
    downloadBtn = '#pricing_download_form button'
    msgOfThanksLoc = '//div/form/../../div[4]'

    async fillDownloadFormFields (firstName, lastName, email) {
        await $(this.downloadForm).scrollIntoView({ block: "center" })
        await $(this.firstNameInp).addValue(firstName)
        await $(this.lastNameInp).addValue(lastName)
        await $(this.emailInp).addValue(email)
    }

    async downloadPriceBtnClick () {
        await $(this.downloadBtn).click()
    }

    async messageOfThanks () {
        return await $(this.msgOfThanksLoc)
    }
}

class UnparalSupportPage extends Page {
    articleTitleLoc = 'h1.t__h1'
    articleAuthorLoc = '.avatar span'
    supportEmailLoc = '.intercom-content-link'
    reactionPickerLoc = '.intercom-reaction-picker'
    reactionsEmojiLoc = '.intercom-reaction'

    async articleTitle () {
        return await $(this.articleTitleLoc)
    }

    async articleAuthor () {
        return await $(this.articleAuthorLoc)
    }

    async supportEmail () {
        return await $(this.supportEmailLoc)
    }

    async reactionPicker () {
        return await $(this.reactionPickerLoc)
    }

    async reactionsEmoji () {
        return await $$(this.reactionsEmojiLoc)
    }
}

module.exports = {
    GlobalIpPage: GlobalIpPage,
    globalIpPage: new GlobalIpPage,
    SipTrunkPricePage: SipTrunkPricePage,
    sipTrunkPricePage: new SipTrunkPricePage,
    UnparalSupportPage: UnparalSupportPage,
    unparalSupportPage: new UnparalSupportPage
}