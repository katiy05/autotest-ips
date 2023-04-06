import { LoginPage } from '../../user/page-object/Login.page'
import { ListIssuesPage } from '../page-object/ListIssues.page'
import { IssuesPage } from '../page-object/Issues.page'
import { createUserModel, UserModel } from '../../user/model/user.model'
import { userData } from '../../user/data/user.data'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { issuesData } from '../data/issues.data'
import { IssueAPIService } from '../../../common/api/api-service/IssueAPIService'

const FILE_PATH = 'src/files/fileForIssue.docx'
const NAME_FILE_PATH = 'fileForIssue.docx'
const STATE_ISSUE_CLOSED = 'Closed'
const LABEL_ISSUE_BAG = 'bug'
const TEST_MASK = 'issue-test'

describe('Issue create test', () => {
    let loginPage: LoginPage
    let listIssuesPage: ListIssuesPage
    let issuesPage: IssuesPage
    let user: UserModel
    let newIssue: IssuesModel
    let editIssues: IssuesModel

    before(async () => {
        loginPage = new LoginPage(browser)
        listIssuesPage = new ListIssuesPage(browser)
        issuesPage = new IssuesPage(browser)
        user = createUserModel(userData(TEST_MASK))
        editIssues = createIssuesModel(issuesData(TEST_MASK))

        await loginPage.open()
        await loginPage.login(user)
    })

    // beforeEach(async () => {
    //     // newIssue = createIssuesModel(issuesData(TEST_MASK))
    //     // await listIssuesPage.open()
    //     // await listIssuesPage.createIssue()
    //     await IssueAPIService.createIssue()
    // })

    // it('Issue should be creat', async () => {
    //     await issuesPage.setTitleIssue(newIssue.titleIssues)
    //     await issuesPage.submitIssue()
    //     expect(await issuesPage.getTitleIssueText()).toEqual(newIssue.titleIssues)
    // })

    // it('Without a title button New issue is disabled', async () => {
    //     await issuesPage.setCommentIssue(newIssue.comment)
    //     expect(await issuesPage.isClickableButtonNewIssue()).toEqual(false)
    // })

    describe('Issue deleted test', async () => {
        beforeEach(async () => {
            await IssueAPIService.createIssue()
        })

        it('Issue should be deleted', async () => {
            await issuesPage.deleteIssue()
            await browser.pause(2000)
            await listIssuesPage.searchIssue(newIssue.titleIssues)
            await browser.pause(2000)
            expect(await listIssuesPage.isDisplayedNoResultsBlock()).toEqual(true)
        })

        describe('Issue test', () => {
            it('Title issue should be edit ', async () => {
                await issuesPage.submitEditTitleIssue()
                await issuesPage.setTitleIssue(newIssue.titleIssues)
                await issuesPage.saveTitleIssue()
                expect(await issuesPage.getTitleIssueText()).toEqual(newIssue.titleIssues)
            })

            it('Comment issue should be added', async () => {
                await issuesPage.addComment(newIssue.comment)
                expect(await issuesPage.getCommentText()).toEqual(newIssue.comment)
            })

            it.only('Comment update issue should be added', async () => {
                await issuesPage.addComment(newIssue.comment)
                await issuesPage.editComment(editIssues.comment)
                expect(await issuesPage.getCommentText()).toEqual(editIssues.comment)
            })

            it('Comment issue should be upload file', async () => {
                await issuesPage.uploadFile(FILE_PATH)
                await browser.pause(2000)
                await issuesPage.submitComment()
                expect(await issuesPage.getCommentText()).toEqual(NAME_FILE_PATH)
            })

            it('Comment issue should be deleted', async () => {
                await issuesPage.addComment(newIssue.comment)
                await issuesPage.deleteComment()
                expect(await issuesPage.notDisplayedComment()).toEqual(false)
            })

            it('State issue should be CLOSED', async () => {
                await issuesPage.сloseIssue()
                await browser.pause(5000)
                expect(await issuesPage.getStateIssueText()).toEqual(STATE_ISSUE_CLOSED)
            })

            it('For issue should be set the tag BUG', async () => {
                await issuesPage.addLabeldBug()
                await browser.pause(3000)
                expect(await issuesPage.getSidebarLabelText()).toEqual(LABEL_ISSUE_BAG)
                expect(await issuesPage.getLabelIssueText()).toEqual(LABEL_ISSUE_BAG)
            })

            afterEach(async () => {
                await issuesPage.deleteIssue()
            })
        })
    })
})