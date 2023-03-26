import { ChainablePromiseElement } from 'webdriverio'

class ListIssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/katiy05/autotest-lesson1/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async setSearchDeletedIssue(titleIssues: string): Promise<void> {
        await this.getFieldSearch().waitForDisplayed({
            timeoutMsg: 'Field search was not displayed'
        })
        return this.getFieldSearch().setValue(titleIssues)
    }

    public async submitNewIssues(): Promise<void> {
        await this.getButtonNewIssues().waitForClickable({
            timeoutMsg: 'Button new issues was not clickable'
        })
        return this.getButtonNewIssues().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getButtonNewIssues(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="repo-content-pjax-container"]//*[@data-hotkey="c"]')
    }

    private getFieldSearch(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-issues-search"]')
    }

    private getNoResultsSearch(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="repo-content-turbo-frame"]//*[contains(@class, "blankslate-large")]')
    }

    public async isDisplayedNoResultsSearch(): Promise<boolean> {
        return this.getNoResultsSearch().isDisplayed()
    }


}

export {
    ListIssuesPage,
}