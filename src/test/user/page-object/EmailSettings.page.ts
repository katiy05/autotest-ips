import { ChainablePromiseElement } from 'webdriverio'

class EmailSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/emails'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async submitValueToggle(): Promise<void> {
        return this.getToggle().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getToggle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="toggle_visibility"]')
    }
}

export {
    EmailSettingsPage,
}