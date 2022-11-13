const { Page } = require("./page");

class UcaasCasePage extends Page {
    pageTitleLoc = 'h1 strong'
    purchaseNumLinkLoc = '[href*="api/v2/numbers"]'
    exploreVideoLinkLoc = '[href*="api/v2/video"]'
    exploreReportsLinkLoc = '[href*="api/v1/reports"]'
    startFreeBtnLoc = 'main div:nth-child(2)>div>[href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async purchaseNumLink () {
        return await $(this.purchaseNumLinkLoc)
    }

    async exploreVideoLink () {
        return await $(this.exploreVideoLinkLoc)
    }

    async exploreReportsLink () {
        return await $(this.exploreReportsLinkLoc)
    }

    async startFreeBtn () {
        return await $(this.startFreeBtnLoc)
    }
}

class ManagedServCasePage extends Page {
    pageTitleLoc = 'h1>span'
    monUsagePageSubtitleLoc = 'div:nth-child(6) h2'
    signUpTodayBtnLoc = 'div:nth-child(3) [href="/sign-up"]'
    seeApiPricingLinkLoc = 'main [href="/pricing/call-control"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async monUsePageSubtitle () {
        return await $(this.monUsagePageSubtitleLoc)
    }

    async signUpTodayBtn () {
        return await $(this.signUpTodayBtnLoc)
    }

    async seeApiPricingLink () {
        return await $(this.seeApiPricingLinkLoc)
    }
}

class SmallBussCasePage extends Page {
    pageTitleLoc = 'h1>span'
    voipVsLandlinePageSubtitleLoc = 'div:nth-child(3) header h2'
    letsTalkBtnLoc = 'main [href="/contact-us"]'
    signUpFor10BtnLoc = 'div:nth-child(10) [href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async voipVsLandlinePageSubtitle () {
        return await $(this.voipVsLandlinePageSubtitleLoc)
    }

    async letsTalkBtn () {
        return await $(this.letsTalkBtnLoc)
    }

    async signUpFor10Btn () {
        return await $(this.signUpFor10BtnLoc)
    }
}

class MultiCloudCasePage extends Page {
    pageTitleLoc = 'h1>span'
    exploreDocsLinkLoc = '[href*="api/v1/networking"]'
    downloadSheetLinkLoc = 'main [href*="image"]'
    tryFreeBtnLoc = 'div:nth-child(14) [href="/sign-up"]'
    buildProd = {
        firstHalf: 'main li:nth-child(',
        secHalf: ') [href*="products"]'
    }

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async exploreDocLink () {
        return await $(this.exploreDocsLinkLoc)
    }

    async downloadSheetLink () {
        return await $(this.downloadSheetLinkLoc)
    }

    async tryFreeBtn () {
        return await $(this.tryFreeBtnLoc)
    }

    async buildProduct (prodIndex) {
        let buildProd = `${this.buildProd.firstHalf}${prodIndex}${this.buildProd.secHalf}`
        return await $(buildProd)
    }
}

module.exports = {
    UcaasCasePage: UcaasCasePage,
    ucaasCasePage: new UcaasCasePage,
    ManagedServCasePage: ManagedServCasePage,
    managedServCasePage: new ManagedServCasePage,
    SmallBussCasePage: SmallBussCasePage,
    smallBussCasePage: new SmallBussCasePage,
    MultiCloudCasePage: MultiCloudCasePage,
    multiCloudCasePage: new MultiCloudCasePage
}