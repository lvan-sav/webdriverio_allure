const { Page } = require('./page')

const emailInp = '#email'
const nameInp = '#full_name'
const passInp = '#password'
const termsBox = '[aria-labelledby="terms-label"]'
const createAccBtn = '[type="submit"]'
const signUpFormError = '#signup-form_error'

class SignUpPage extends Page {
    async fillInAllFields ( email, fullName, password) {
        await $(emailInp).addValue(email)
        await $(nameInp).addValue(fullName)
        await $(passInp).addValue(password)
        await $(termsBox).click()
    }

    async clickSubmitBtn () {
        const btn = await $(createAccBtn)
        await btn.waitForClickable({
            timeout: 60000,
            timeoutMsg: 'Create account button is not clickable'
        })
        await btn.click()
    }

    async signUpFormError() {
        return await $(signUpFormError)
    }
}

module.exports = {
    SignUpPage: SignUpPage,
    signUpPage: new SignUpPage
}