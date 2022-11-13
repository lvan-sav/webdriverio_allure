const { Page } = require("./page");


const aboutNetworkLink = 'main [href*="global-ip"]'
const seePricingBtn = 'main [href="/pricing/elastic-sip"]'
const unparalSupLink = '[href*="what-are-the-support-hours"]'

const ucaasUseCaseBlock = '[href="/use-cases/ucaas"]'
const managedServCaseBlock = 'main [href*="managed-services-telephony-reseller"]'
const smallBusCaseBlock = 'main [href*="voip-for-small-business"]'
const multiCloudCaseBlock = '[href*="multi-cloud"]'

const signUpBtn = 'footer [href="/sign-up"]'
const talkExpertsLink = 'div:nth-child(4) [href*="contact-us"]'
const scheduleLink = '//header/following-sibling::div//a[contains(@href, "contact-us")]'

class SipTrunkingProdPage extends Page {

    async openAboutNetworkPage () {
        await this.openPage(aboutNetworkLink)
    }

    async openSipTrunkPricePage () {
        await this.openPage(seePricingBtn)
    }

    async openUnparalSupportPage () {
        await this.openPage(unparalSupLink)
    }

    async openUcaasUseCase () {
        await this.openPage(ucaasUseCaseBlock)
    }

    async openManagedServUseCase () {
        await this.openPage(managedServCaseBlock)
    }

    async openSmallBusUseCase () {
        await this.openPage(smallBusCaseBlock)
    }

    async openMultCloudUseCase () {
        await this.openPage(multiCloudCaseBlock)
    }

    async getFreeBtnClick () {
        await this.openPage(signUpBtn)
    }

    async talkExpertsLinkClick () {
        await this.openPage(talkExpertsLink)
    }

    async scheduleLinkClick () {
        await this.openPage(scheduleLink)
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}