import { ChainablePromiseElement } from 'webdriverio'

class ListIssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/katiy05/autotest-lesson1/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async submitNewIssues(): Promise<void> {
        await this.getButtonNewIssues().waitForClickable({
            timeoutMsg: 'Error was not displayed'
        })
        return this.getButtonNewIssues().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getButtonNewIssues(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="repo-content-pjax-container"]//*[@data-hotkey="c"]')
    }
}

export {
    ListIssuesPage,
}