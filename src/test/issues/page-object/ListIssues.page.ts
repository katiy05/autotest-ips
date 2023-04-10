import { ChainablePromiseElement } from 'webdriverio'

class ListIssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/katiy05/autotest-lesson1/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async isDisplayedNoResultsBlock(): Promise<boolean> {
        await this.getNoResultsSearch().waitForDisplayed({
            timeoutMsg: 'No results search was not displayed'
        })
        return this.getNoResultsSearch().isDisplayed()
    }

    public async setIssueSearch(titleIssues: string): Promise<void> {
        await this.getFieldSearch().waitForDisplayed({
            timeoutMsg: 'Field search was not displayed'
        })
        return this.getFieldSearch().setValue(titleIssues)
    }
    public async searchIssue(titleIssues: string): Promise<void> {
        await this.setIssueSearch(titleIssues)
        await browser.keys('Enter')
    }

    public async createIssue(): Promise<void> {
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
}

export {
    ListIssuesPage,
}