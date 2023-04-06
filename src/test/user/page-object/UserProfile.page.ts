import { ChainablePromiseElement } from 'webdriverio'
import { LOGIN } from '../../../../credential'

class UserProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getBioText(): Promise<string> {
        return this.getBio().getText()
    }

    public async getPronounsText(): Promise<string> {
        return this.getPronouns().getText()
    }

    public async getUserNameText(): Promise<string> {
        return this.getUserName().getText()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class, "p-note")]')
    }

    private getPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@itemprop="pronouns"]')
    }

    private getUserName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//h1//*[contains(@class, "p-name")]')
    }

}

export {
    UserProfilePage,
}