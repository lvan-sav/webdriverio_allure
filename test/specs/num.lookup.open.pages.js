const { mainPage } = require('../pageobjects/main.page')
const { numLookupProdPage } = require('../pageobjects/num.lookup.prod.page')
const { numLookupOverviewDocPage,
        msgDocPage } = require('../pageobjects/num.lookup.addition.pages')

describe('Going to another page test suite for the Number Lookup product page', () => {
    beforeEach(async () => {
        await mainPage.headNumLookupLinkClick()
    });

    it('Should to open the Number lookup Owerview doc page from the Number\
 Lookup product page', async () => {
        await numLookupProdPage.openNumLookupOverviewDocPage()

        await expect(browser).toHaveUrlContaining(/number-lookup$/)
        await expect(numLookupOverviewDocPage.pageTitle()).toBeDisplayed()
        await expect(numLookupOverviewDocPage.pageTitle()).toHaveTextContaining('Number lookup Overview')
        await expect(numLookupOverviewDocPage.runPostmanBtn()).toBeClickable()
        await expect(numLookupOverviewDocPage.httpEndpointsTitle()).toBeDisplayed()
    });

    it('Should to Open the Massaging doc page by clicking "Explore use-case\
 guides" button on the Number Lookup page', async () => {
        await numLookupProdPage.openMsgDocPage()

        await expect(browser).toHaveUrlContaining(/docs\/v2\/messaging$/)
        await expect(msgDocPage.pageTitle()).toBeDisplayed()
        await expect(msgDocPage.pageTitle()).toHaveText('Messaging')
        await expect(msgDocPage.seeTheSpecsBtn()).toBeClickable()
        await expect(msgDocPage.sendYouSms()).toBeClickable()
    });
});