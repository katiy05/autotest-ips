import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'

class IssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/katiy05/autotest-lesson1/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getBugText(): Promise<void> {
        await this.getBug().waitForDisplayed({
            timeoutMsg: 'Bug text was not displayed'
        })
        await this.getBug().getText()
    }

    public async getCommentText(): Promise<string> {
        await this.getComment().waitForDisplayed({
            timeoutMsg: 'Comment was not displayed'
        })
        return this.getComment().getText()
    }

    public async getStateIssueText(): Promise<string> {
        await this.getStateIssue().waitForDisplayed({
            timeoutMsg: 'State issue was not displayed'
        })
        return this.getStateIssue().getText()
    }

    public async getTitleIssueText(): Promise<string> {
        await this.getTitleIssue().waitForDisplayed({
            timeoutMsg: 'Title issue was not displayed'
        })
        return this.getTitleIssue().getText()
    }

    public async isClickableSubmitNewIssue(): Promise<boolean> {
        return this.getButtonSubmitNewIssue().isClickable()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async setCommentIssue(commentIssues: string): Promise<void> {
        await this.getFieldCommentIssue().waitForDisplayed({
            timeoutMsg: 'Field comment issue was not displayed'
        })
        return this.getFieldCommentIssue().setValue(commentIssues)
    }

    public async setEditComment(editComment: string): Promise<void> {
        await this.getFieldEditComment().waitForDisplayed({
            timeoutMsg: 'Field edit comment was not displayed'
        })
        return this.getFieldEditComment().setValue(editComment)
    }

    public async setNewComment(newComment: string): Promise<void> {
        await this.getFieldNewComment().waitForDisplayed({
            timeoutMsg: 'Field new comment was not displayed'
        })
        return this.getFieldNewComment().setValue(newComment)
    }

    public async setTitleIssue(titleIssues: string): Promise<void> {
        await this.getFieldTitleIssue().waitForDisplayed({
            timeoutMsg: 'Field title issue was not displayed'
        })
        return this.getFieldTitleIssue().setValue(titleIssues)
    }

    public async submitCloseIssue(): Promise<void> {
        await this.getButtonCloseIssue().waitForClickable({
            timeoutMsg: 'Submit close issue was not clickable'
        })
        await this.getButtonCloseIssue().click()
    }

    public async submitComment(): Promise<void> {
        await this.getButtonComment().waitForClickable({
            timeoutMsg: 'Button comment was not clickable'
        })
        await this.getButtonComment().click()
    }

    public async submitCommentMenu(): Promise<void> {
        await this.getCommentMenu().waitForClickable({
            timeoutMsg: 'Submit comment menu was not clickable'
        })
        await this.getCommentMenu().click()
    }

    public async submitDeleteComment(): Promise<void> {
        await this.getButtonDeleteComment().waitForClickable({
            timeoutMsg: 'Submit delete comment was not clickable'
        })
        await this.getButtonDeleteComment().click()
    }

    public async submitDeleteIssue(): Promise<void> {
        await this.getButtonDeleteIssue().waitForClickable({
            timeoutMsg: 'Button delete issue was not clickable'
        })
        await this.getButtonDeleteIssue().click()
    }

    public async submitEditComment(): Promise<void> {
        await this.getButtonEditComment().waitForClickable({
            timeoutMsg: 'Submit edit comment was not clickable'
        })
        await this.getButtonEditComment().click()
    }

    public async submitEditTitleIssue(): Promise<void> {
        await this.getButtonEditTitleIssue().waitForClickable({
            timeoutMsg: 'Button edit title issue was not clickable'
        })
        await this.getButtonEditTitleIssue().click()
    }

    public async submitLabelsBug(): Promise<void> {
        await this.getLabelsBug().waitForClickable({
            timeoutMsg: 'Submit button confirmation delete issue was not clickable'
        })
        await this.getLabelsBug().click()
    }

    public async submitLabelsSelectMenu(): Promise<void> {
        await this.getLabelsSelectMenu().waitForClickable({
            timeoutMsg: 'Submit labels select menu was not clickable'
        })
        await this.getLabelsSelectMenu().click()
    }

    public async submitUpdateComment(): Promise<void> {
        await this.getButtonUpdateComment().waitForClickable({
            timeoutMsg: 'Button update comment was not clickable'
        })
        await this.getButtonUpdateComment().click()
    }

    public async submitNewIssue(): Promise<void> {
        await this.getButtonSubmitNewIssue().waitForClickable({
            timeoutMsg: 'Button submit new issue was not clickable'
        })
        await this.getButtonSubmitNewIssue().click()
    }

    public async submitSaveTitleIssue(): Promise<void> {
        await this.getButtonSaveTitleIssue().waitForClickable({
            timeoutMsg: 'Button save title issue was not clickable'
        })
        await this.getButtonSaveTitleIssue().click()
    }

    public async submitVerifyDeleteIssue(): Promise<void> {
        await this.getButtonVerifyDeleteIssue().waitForClickable({
            timeoutMsg: 'Submit verify delete issue was not clickable'
        })
        await this.getButtonVerifyDeleteIssue().click()
    }

    public async uploadFile(filePath: string): Promise<void> {
        await this.getButtonUploadFileToComment().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        const file: string = await this.browser.uploadFile(filePath)
        await this.getButtonUploadFileToComment().setValue(file)
    }

    public async newIssue(issue: IssuesModel): Promise<void> {
        await this.setTitleIssue(issue.titleIssues)
        await this.setCommentIssue(issue.comment)
        await this.submitNewIssue()
    }

    private getBug(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="label-ac5baf"]')
    }

    private getButtonCloseIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-new-comment-form-actions"]//close-reason-selector//button')
    }

    private getButtonComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-new-comment-form-actions"]//*[contains(@class,"btn-primary")]')
    }

    private getButtonDeleteComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id, "issuecomment")]//details-menu/form/button')
    }

    private getButtonDeleteIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-sidebar"]//*[@class="d-inline-block"]')
    }

    private getButtonEditComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id, "issuecomment")]//*[@aria-label="Edit comment"]')
    }

    private getButtonEditTitleIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-header"]/div[1]/div/div/button')
    }

    private getButtonSaveTitleIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-disable-with="Updating"]')
    }

    private getButtonSubmitNewIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_issue"]//*[contains(@class, "flex-items-center")]/button')
    }

    private getButtonUpdateComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id, "issuecomment")]//*[contains(@class, "gap-1")]//*[@type="submit"]')
    }

    private getButtonUploadFileToComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="fc-new_comment_field"]')
    }

    private getButtonVerifyDeleteIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@name="verify_delete"]')
    }

    private getComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id, "issuecomment")]//*[contains(@class, "js-comment-body")]')
    }

    private getCommentMenu(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id, "issuecomment")]//*[contains(@class, "timeline-comment-actions")]/details')
    }

    private getFieldCommentIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_body"]')
    }

    private getFieldEditComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@name="issue_comment[body]"]')
    }

    private getFieldNewComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_comment_field"]')
    }

    private getFieldTitleIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }

    private getLabelsBug(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="labels-select-menu"]//*[@data-prio-filter-value="bug"]')
    }

    private getLabelsSelectMenu(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="labels-select-menu"]/summary')
    }

    private getStateIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-header"]/div[3]/div[1]/span')
    }

    private getTitleIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-header"]//bdi')
    }

}

export {
    IssuesPage,
}