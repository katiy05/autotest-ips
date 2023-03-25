import { LoginPage } from '../../login/page-object/Login.page'
import { ListIssuesPage } from '../page-object/ListIssues.page'
import { IssuesPage } from '../page-object/Issues.page'
import { createUserModel, UserModel } from '../../login/model/user.model'
import { userData } from '../../login/data/user.data'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { editIssuesData, issuesData, newIssuesData } from '../data/issues.data'

const SET_EMPTY = ''
const BODY_ISSUE = 'Поправить форматирование текста'
const INPUT_NEW_COMMENT = 'Добавлен новый комментарий к задаче'
const INPUT_EDIT_COMMENT = 'Редактирование комментария к задаче'
const filePath = 'src/files/fileForIssue.docx'
const nameFilePath = 'fileForIssue.docx'
const STATE_ISSUE_CLOSED = 'Closed'

describe('Issue test', async () => {
    let loginPage: LoginPage
    let listIssuesPage: ListIssuesPage
    let issuesPage: IssuesPage
    let user: UserModel
    let newIssues: IssuesModel
    let editIssues: IssuesModel

    before(async () => {
        loginPage = new LoginPage(browser)
        listIssuesPage = new ListIssuesPage(browser)
        issuesPage = new IssuesPage(browser)
        user = createUserModel(userData)
        newIssues = createIssuesModel(newIssuesData)
        editIssues = createIssuesModel(editIssuesData)

        await loginPage.open()
        await loginPage.login(user)
    })

    beforeEach(async () => {
        await listIssuesPage.open()
        await listIssuesPage.submitNewIssues()
    })

    it('Issue should be creat', async () => {
        await issuesPage.setTitleIssue(newIssues.titleIssues)
        await issuesPage.submitNewIssue()
        expect(await issuesPage.getTitleIssueText()).toEqual(newIssues.titleIssues)
    })

    it('Without a title button New issue is disabled', async () => {
        await issuesPage.setTitleIssue(SET_EMPTY)
        await issuesPage.setCommentIssue(newIssues.comment)
        expect(await issuesPage.isClickableSubmitNewIssue()).toEqual(false)
    })

    it('Title issue should be edit ', async () => {
        await issuesPage.newIssue(newIssues)
        await issuesPage.submitEditTitleIssue()
        await issuesPage.setTitleIssue(editIssues.titleIssues)
        await issuesPage.submitSaveTitleIssue()
        expect(await issuesPage.getTitleIssueText()).toEqual(editIssues.titleIssues)
    })

    it('Comment issue should be added', async () => {
        await issuesPage.newIssue(newIssues)
        await issuesPage.setNewComment(editIssues.comment)
        await issuesPage.submitComment()
        expect(await issuesPage.getCommentText()).toEqual(editIssues.comment)
    })

    it('Comment update issue should be added', async () => {
        await issuesPage.newIssue(newIssues)
        await issuesPage.setNewComment(newIssues.comment)
        await issuesPage.submitComment()
        await issuesPage.submitCommentMenu()
        await issuesPage.submitEditComment()
        await issuesPage.setEditComment(editIssues.comment)
        await issuesPage.submitUpdateComment()
        expect(await issuesPage.getCommentText()).toEqual(editIssues.comment)
    })

    it('Comment issue should be upload file', async () => {
        await issuesPage.newIssue(newIssues)
        await issuesPage.uploadFile(filePath)
        await browser.pause(2000)
        await issuesPage.submitComment()
        expect(await issuesPage.getCommentText()).toEqual(nameFilePath)
    })

    it('State issue should be CLOSED', async () => {
        await issuesPage.submitCloseIssue()
        await browser.pause(5000)
        expect(await issuesPage.getStateIssueText()).toEqual(STATE_ISSUE_CLOSED)
    })

    it.only('For issue should be set the tag BUG', async () => {
        await issuesPage.newIssue(newIssues)
        await issuesPage.submitLabelsSelectMenu()
        await issuesPage.submitLabelsBug()
        await issuesPage.submitLabelsSelectMenu()
        await browser.pause(3000)
        expect(await issuesPage.getBugSelectMenuText()).toEqual('bug')
        //expect(await issuesPage.getUnderCommentIssueText()).toEqual('bug')
    })





})