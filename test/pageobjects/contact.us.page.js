const { Page } = require('./page')

const reasonSelectorLoc = '#Reason_for_Contact__c'
const firstNameInpLoc = '#FirstName'
const lastNameInpLoc = '#LastName'
const emailInpLoc = '#Email'
const numCodeSelectorLoc = '#Phone_Number_Extension__c'
const numInpLoc = '#Phone_Number_Base__c'
const webSiteInpLoc = '#Website'
const addInfoInpLoc = '#Form_Additional_Information__c'
const receiveBoxLoc = '[name="Subscription_Opt_In__c"]'
const submitBtnLoc = 'button.mktoButton'

class ContactUsPage extends Page {
    reasonOpt = ['Sales-Inquiry', 'Support', 'Legal']
    
    async reasonSelector () {
        return await $(reasonSelectorLoc)
    }

    async firstNameInp () {
        return await $(firstNameInpLoc)
    }

    async lastNameInp () {
        return await $(lastNameInpLoc)
    }

    async emailInp () {
        return await $(emailInpLoc)
    }

    async numCodeSelector (){
        return await $(numCodeSelectorLoc)
    }

    async numCode (num) {
        return await $(`${numCodeSelectorLoc} option:nth-child(${num})`)
    }

    async numInp () {
        return await $(numInpLoc)
    }

    async webSiteInp () {
        return await $(webSiteInpLoc)
    }

    async addInfoInp () {
        return await $(addInfoInpLoc)
    }

    async receiveBox () {
        return await $(receiveBoxLoc)
    }

    async submitBtn () {
        return await $(submitBtnLoc)
    }

    async fillInAllFields (reason, fName, lName, email, code, number, site, info) {
        await $(reasonSelectorLoc).selectByAttribute('value', reason)
        await $(firstNameInpLoc).addValue(fName)
        await $(lastNameInpLoc).addValue(lName)
        await $(emailInpLoc).addValue(email)
        await $(numCodeSelectorLoc).selectByAttribute('value', code)
        await $(numInpLoc).addValue(number)
        await $(webSiteInpLoc).addValue(site)
        await $(addInfoInpLoc).addValue(info)
        await $(receiveBoxLoc).click()
    }
}

module.exports = {
    ContactUsPage: ContactUsPage,
    contactUsPage: new ContactUsPage
}