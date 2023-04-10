import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../credential"
import { issuesData } from "../../../../test/issues/data/issues.data"
import { IssuesModel, createIssuesModel } from "../../../../test/issues/model/issues.model"
import { IssueAPIProvider } from "../../api-provider/IssueAPIProvider"
import { CreateIssueResponse, GetIssueResponse } from "../../api-service/IssueAPIService"

// const fetch = require('node-fetch')
const FORBIDDEN_CREATE_ISUUE = 'lubawa'
const NOT_FOUND_REPO = 'repository'
const owner = 'lubawa1'

describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssuesModel
    const mask: string = 'test-issue'

    beforeEach(async () => {
        issue = createIssuesModel(issuesData(mask))
    })

    it.only('issue should be create', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(
            LOGIN,
            REPO,
            {
                title: issue.title,
            },
        )
        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual('open')

        // const responseUrl: Response = await fetch(response.data.html_url)
        // expect(responseUrl.status).toEqual(200)

        const responseGetIssues: AxiosResponse<GetIssueResponse> = await issueAPIProvider.getIssues(
            LOGIN,
            REPO
        )
        const name_issue: string | undefined = responseGetIssues.data.html_url.find((issues: string) => issues = response.data.title)
        console.log(name_issue)
        //expect(responseGetIssues.data.title).toEqual(issue.title)
    })

    it('errors 410 should be create issue', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(
            owner,
            FORBIDDEN_CREATE_ISUUE,
            {
                title: issue.title,
            },
        )

        expect(response.status).toEqual(404)
    })

    it('errors 404 should be create issue', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(
            LOGIN,
            NOT_FOUND_REPO,
            {
                title: issue.title,
            },
        )

        expect(response.status).toEqual(404)
    })

    it('errors 422 should be create issue', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(
            LOGIN,
            NOT_FOUND_REPO,
            {
                title: './',
            },
        )

        expect(response.status).toEqual(404)
    })
})

