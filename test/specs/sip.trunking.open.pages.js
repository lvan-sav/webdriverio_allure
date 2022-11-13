const { faker } = require('@faker-js/faker')
const { mainPage } = require('../pageobjects/main.page')
const { sipTrunkingProdPage } = require('../pageobjects/sip.trunk.prod.page')
const { globalIpPage, sipTrunkPricePage, unparalSupportPage } = require('../pageobjects/sip.trunk.addition.pages')


describe('Going to another page test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        await mainPage.headSipTrunkLinkClick()
    });

    it('Should to open the Global IP network solutions page by clicking the \
 "Learn about our Network" on the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openAboutNetworkPage()

        await expect(browser).toHaveUrlContaining(/solutions\/global-ip-network$/)
        await expect(globalIpPage.pageTitle()).toBeDisplayed()
        await expect(globalIpPage.pageTitle()).toHaveText('The Global, Private Network Built for Real-Time Comms.')
        await expect(globalIpPage.tryNetworkBtn()).toBeClickable()
        await expect(globalIpPage.pricingBtn()).toBeClickable()
        await expect(globalIpPage.startFreeTrialBtn()).toBeClickable()
    });

    it('Should to open the Elastic SIP Trunking price page from the Sip \
 Trunking product page and send the pricelist csv file to the random email', async () => {
        await sipTrunkingProdPage.openSipTrunkPricePage()
        
        await sipTrunkPricePage.fillDownloadFormFields(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.email()
        )

        await sipTrunkPricePage.downloadPriceBtnClick()

        await expect(sipTrunkPricePage.messageOfThanks()).toHaveText("Thank you. We'll email you pricing right away!")
    });

    it('Should to Open the "What are the support hours?" article from\
 the SIP Trunking product page', async () => {
        await sipTrunkingProdPage.openUnparalSupportPage()
        
        await expect(browser).toHaveUrlContaining(/what-are-the-support-hours$/)
        await expect(unparalSupportPage.articleTitle()).toBeDisplayed()
        await expect(unparalSupportPage.articleTitle()).toHaveText('What are the support hours?')
        await expect(unparalSupportPage.articleAuthor()).toBeDisplayed()
        await expect(unparalSupportPage.articleAuthor()).toHaveText(/Telnyx Sales/)
        await expect(unparalSupportPage.supportEmail()).toBeDisplayed()
        await expect(unparalSupportPage.supportEmail()).toHaveText('support@telnyx.com')
        await expect(unparalSupportPage.reactionPicker()).toBeDisplayed()
        
        const emojies = await unparalSupportPage.reactionsEmoji()
        
        emojies.forEach(async emoji => {
            await emoji.click()
            await expect(emoji).toHaveAttrContaining('class', 'intercom-reaction-picker-reaction-selected')
        })
    })
})