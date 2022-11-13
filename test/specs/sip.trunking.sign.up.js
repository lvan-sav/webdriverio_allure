const helper = require('../../helper/helper')
const { faker } = require('@faker-js/faker')
const contact_us_data = helper.parseJsonFile('./environments/contact_us_data.json')
const registration_data = helper.parseJsonFile('./environments/registration_data.json')
const { mainPage } = require('../pageobjects/main.page')
const { sipTrunkingProdPage } = require('../pageobjects/sip.trunk.prod.page')
const { signUpPage } = require('../pageobjects/sign.up.pages')
const { contactUsPage } = require('../pageobjects/contact.us.page')

describe('Registration and contact support test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        await mainPage.headSipTrunkLinkClick()
    });
    
    it('Should sign up from the SIP Trunking product page', async () => {
        await sipTrunkingProdPage.getFreeBtnClick()

        let randEmail = faker.internet.email()

        if(!registration_data.email)
            randEmail = faker.internet.exampleEmail()
        
        await signUpPage.fillInAllFields(
            randEmail,
            faker.name.fullName(),
            faker.internet.password(30, false, /[!-}]/, '!1So')
        )

        await signUpPage.clickSubmitBtn()
        
        await expect(signUpPage.signUpFormError()).toBeDisplayed()
    });

    it('Should get talking to an experts from the SIP Trunking product page', async () => {
        await sipTrunkingProdPage.talkExpertsLinkClick()

        let randReason = contactUsPage.reasonOpt[Math.floor(Math.random() * 3)]

        if(contact_us_data.reason !== "Support") {
            randReason = contact_us_data.reason
        }

        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()

        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCodeElem = await contactUsPage.numCode(randNumCodeIdx)
        const randNumCode = await randNumCodeElem.getValue()
        
        const randNum = faker.phone.number('###########')
        const randWebSite = faker.internet.url()
        const randText = faker.lorem.paragraph()
        
        await contactUsPage.fillInAllFields(
            randReason,
            randFirstName,
            randLastName,
            randEmail,
            randNumCode,
            randNum,
            randWebSite,
            randText
        )

        await expect(contactUsPage.reasonSelector()).toHaveValue(randReason)
        await expect(contactUsPage.firstNameInp()).toHaveValue(randFirstName)
        await expect(contactUsPage.lastNameInp()).toHaveValue(randLastName)
        await expect(contactUsPage.emailInp()).toHaveValue(randEmail)
        await expect(contactUsPage.numCodeSelector()).toHaveValue(randNumCode)
        await expect(contactUsPage.numInp()).toHaveValue(randNum)
        await expect(contactUsPage.webSiteInp()).toHaveValue(randWebSite)
        await expect(contactUsPage.addInfoInp()).toHaveValue(randText)
        await expect(contactUsPage.submitBtn()).toBeClickable()
    });

    it('Should get talking to an experts from the SIP Trunking page about the \
 Scheduling a Demo of the Mission Control Portal', async () => {
        await sipTrunkingProdPage.scheduleLinkClick()

        const reason = contact_us_data.reason
        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()

        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCodeElem = await contactUsPage.numCode(randNumCodeIdx)
        const randNumCode = await randNumCodeElem.getValue()
        
        const randNum = faker.phone.number('###########')
        const randWebSite = faker.internet.url()
        const randText = faker.lorem.paragraph()

        await contactUsPage.fillInAllFields(
            reason,
            randFirstName,
            randLastName,
            randEmail,
            randNumCode,
            randNum,
            randWebSite,
            randText
        )

        await expect(contactUsPage.reasonSelector()).toHaveValue(reason)
        await expect(contactUsPage.firstNameInp()).toHaveValue(randFirstName)
        await expect(contactUsPage.lastNameInp()).toHaveValue(randLastName)
        await expect(contactUsPage.emailInp()).toHaveValue(randEmail)
        await expect(contactUsPage.numCodeSelector()).toHaveValue(randNumCode)
        await expect(contactUsPage.numInp()).toHaveValue(randNum)
        await expect(contactUsPage.webSiteInp()).toHaveValue(randWebSite)
        await expect(contactUsPage.addInfoInp()).toHaveValue(randText)
        await expect(contactUsPage.submitBtn()).toBeClickable()
    });
})