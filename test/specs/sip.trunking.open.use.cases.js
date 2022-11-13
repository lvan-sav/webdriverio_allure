const { mainPage } = require("../pageobjects/main.page");
const { sipTrunkingProdPage } = require("../pageobjects/sip.trunk.prod.page");
const { ucaasCasePage, 
        managedServCasePage,
        smallBussCasePage,
        multiCloudCasePage } = require('../pageobjects/sip.trunk.use.case.pages')

describe('Opening use cases test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        mainPage.headSipTrunkLinkClick()
    });

    it('Should to open the UCaaS use case page by clicking the UCaaS use \
 case block in the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openUcaasUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/ucaas$/)
        await expect(ucaasCasePage.pageTitle()).toBeDisplayed()
        await expect(ucaasCasePage.pageTitle()).toHaveText('UCaaS')
        await expect(ucaasCasePage.purchaseNumLink()).toBeClickable()
        await expect(ucaasCasePage.exploreVideoLink()).toBeClickable()
        await expect(ucaasCasePage.exploreReportsLink()).toBeClickable()
        await expect(ucaasCasePage.startFreeBtn()).toBeClickable()
    });

    it('Should to open the Managed Services use case page by clicking the Managed \
 Services use case block in the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openManagedServUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/managed-services-telephony-reseller$/)
        await expect(managedServCasePage.pageTitle()).toBeDisplayed()
        await expect(managedServCasePage.pageTitle()).toHaveText('Managed Service Providers')
        await expect(managedServCasePage.monUsePageSubtitle()).toBeDisplayed()
        await expect(managedServCasePage.signUpTodayBtn()).toBeClickable()
        await expect(managedServCasePage.seeApiPricingLink()).toBeClickable()
    });

    it('Should to open the Small Business use case page by clicking the Small Business\
 use case block in the Trunking page', async () => {
        await sipTrunkingProdPage.openSmallBusUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/voip-for-small-business$/)
        await expect(smallBussCasePage.pageTitle()).toBeDisplayed()
        await expect(smallBussCasePage.pageTitle()).toHaveText('The Best VoIP Solution for Small Business')
        await expect(smallBussCasePage.voipVsLandlinePageSubtitle()).toBeDisplayed()
        await expect(smallBussCasePage.signUpFor10Btn()).toBeClickable()
    });

    it('Should to open the Multi-Cloud use case page by clicking the Multi-Cloud\
 use case block in the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openMultCloudUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/multi-cloud$/)
        await expect(multiCloudCasePage.pageTitle()).toBeDisplayed()
        await expect(multiCloudCasePage.pageTitle()).toHaveText('Multicloud')
        
        for (let i = 1; i < 5; i++) {
            let buildProd = multiCloudCasePage.buildProduct(i)
            await expect(buildProd).toBeClickable()
        }

        await expect(multiCloudCasePage.exploreDocLink()).toBeClickable()
        await expect(multiCloudCasePage.downloadSheetLink()).toBeClickable()
        await expect(multiCloudCasePage.tryFreeBtn()).toBeClickable()
      });
})