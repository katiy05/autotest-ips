import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async isIncorrectPasswordError(): Promise<boolean> {
        await this.getIncorrectPasswordError().waitForDisplayed({
            timeoutMsg: 'Error was not displayed'
        })
        return this.getIncorrectPasswordError().isDisplayed()
    }

    public async login(user: UserModel): Promise<void> {
        await this.setLogin(user.login)
        await this.setPassword(user.password)
        await this.submit()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async setLogin(login: string): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getLoginField().setValue(login)
    }

    public async setPassword(password: string): Promise<void> {
        await this.getPasswordField().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed'
        })
        await this.getPasswordField().setValue(password)
    }

    public async submit(): Promise<void> {
        await this.getLoginButton().waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await this.getLoginButton().click()
    }

    private getIncorrectPasswordError(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
    }

    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}

export {
    LoginPage,
}