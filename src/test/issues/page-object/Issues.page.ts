import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'

class IssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/katiy05/autotest-lesson1/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async addComment(comment: string): Promise<void> {
        await this.setComment(comment)
        await this.submitComment()
    }

    public async addLabeldBug(): Promise<void> {
        await this.sidebarLabels()
        await this.addLabelsBug1()
        await this.sidebarLabels()
    }

    public async сloseIssue(): Promise<void> {
        await this.getButtonCloseIssue().waitForClickable({
            timeoutMsg: 'Submit close issue was not clickable'
        })
        await this.getButtonCloseIssue().click()
    }

    public async deleteComment(): Promise<void> {
        await this.openCommentMenu()
        await this.submitDeleteComment()
        await browser.acceptAlert()
    }

    public async deleteIssue(): Promise<void> {
        await this.submitDeleteIssue()
        await this.verifyDeleteIssue()
    }

    public async editComment(editComment: string): Promise<void> {
        await this.openCommentMenu()
        await this.openEditComment()
        await this.setEditComment(editComment)
        await this.submitEditComment()
    }

    public async getSidebarLabelText(): Promise<string> {
        await this.getSidebarLabel().waitForDisplayed({
            timeoutMsg: 'Labels bug text was not displayed'
        })
        return this.getSidebarLabel().getText()
    }

    public async getLabelIssueText(): Promise<string> {
        await this.getLabelIssue().waitForDisplayed({
            timeoutMsg: 'Bug text was not displayed'
        })
        return this.getLabelIssue().getText()
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

    public async isClickableButtonNewIssue(): Promise<boolean> {
        return this.getButtonNewIssue().isClickable()
    }

    public async notDisplayedComment(): Promise<boolean> {
        await browser.pause(1000)
        return this.getComment().isDisplayed()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async openEditComment(): Promise<void> {
        await this.getButtonEditComment().waitForClickable({
            timeoutMsg: 'Button edit comment was not clickable'
        })
        await this.getButtonEditComment().click()
    }

    public async setComment(newComment: string): Promise<void> {
        await this.getNewCommentField().waitForDisplayed({
            timeoutMsg: 'Field new comment was not displayed'
        })
        return this.getNewCommentField().setValue(newComment)
    }

    public async setCommentIssue(commentIssues: string): Promise<void> {
        await this.getCommentIssueField().waitForDisplayed({
            timeoutMsg: 'Field comment issue was not displayed'
        })
        return this.getCommentIssueField().setValue(commentIssues)
    }

    public async setEditComment(editComment: string): Promise<void> {
        await this.getEditCommentField().waitForDisplayed({
            timeoutMsg: 'Field edit comment was not displayed'
        })
        return this.getEditCommentField().setValue(editComment)
    }

    public async setTitleIssue(titleIssues: string): Promise<void> {
        await this.getTitleIssueField().waitForDisplayed({
            timeoutMsg: 'Field title issue was not displayed'
        })
        return this.getTitleIssueField().setValue(titleIssues)
    }

    public async submitComment(): Promise<void> {
        await this.getButtonComment().waitForClickable({
            timeoutMsg: 'Button comment was not clickable'
        })
        await this.getButtonComment().click()
    }

    public async openCommentMenu(): Promise<void> {
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

    public async submitEditTitleIssue(): Promise<void> {
        await this.getButtonEditTitleIssue().waitForClickable({
            timeoutMsg: 'Button edit title issue was not clickable'
        })
        await this.getButtonEditTitleIssue().click()
    }

    public async addLabelsBug1(): Promise<void> {
        await this.getLabelsBug().waitForClickable({
            timeoutMsg: 'Submit button confirmation delete issue was not clickable'
        })
        await this.getLabelsBug().click()
    }

    public async sidebarLabels(): Promise<void> {
        await this.getSidebarLabels().waitForClickable({
            timeoutMsg: 'Sidebar labels was not clickable'
        })
        await this.getSidebarLabels().click()
    }

    public async submitEditComment(): Promise<void> {
        await this.getButtonUpdateComment().waitForClickable({
            timeoutMsg: 'Button update comment was not clickable'
        })
        await this.getButtonUpdateComment().click()
    }

    public async submitIssue(): Promise<void> {
        await this.getButtonNewIssue().waitForClickable({
            timeoutMsg: 'Button submit new issue was not clickable'
        })
        await this.getButtonNewIssue().click()
    }

    public async submitFilledIssue(issue: IssuesModel): Promise<void> {
        await this.setTitleIssue(issue.title)
        await this.submitIssue()
    }

    public async saveTitleIssue(): Promise<void> {
        await this.getButtonSaveTitleIssue().waitForClickable({
            timeoutMsg: 'Button save title issue was not clickable'
        })
        await this.getButtonSaveTitleIssue().click()
    }

    public async verifyDeleteIssue(): Promise<void> {
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

    private getSidebarLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class, "js-issue-labels")]//*[@data-name="bug"]/span')
    }

    private getLabelIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="TimelineItem-body"]//*[contains(@id, "label")]')
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

    private getButtonNewIssue(): ChainablePromiseElement<WebdriverIO.Element> {
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

    private getCommentIssueField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_body"]')
    }

    private getEditCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@name="issue_comment[body]"]')
    }

    private getNewCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_comment_field"]')
    }

    private getTitleIssueField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }

    private getLabelsBug(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="labels-select-menu"]//*[@data-prio-filter-value="bug"]')
    }

    private getSidebarLabels(): ChainablePromiseElement<WebdriverIO.Element> {
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