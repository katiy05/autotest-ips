import { AxiosResponse } from "axios";
import { CreateIssueRequest, IssueAPIDataProvider } from "../api-data-provider/IssueAPIDataProvider";
import { IssueAPIProvider } from "../api-provider/IssueAPIProvider";
import { IssuesModel } from "../../../test/issues/model/issues.model"

type CreateIssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string
}

type GetIssueResponse = {
    [x: string]: any;
    id: number[],
    title: string[],
    state: string[],
    html_url: string[]
}

class IssueAPIService {
    static createIssueData: any;
    public static async createIssue(
        owner: string,
        repo: string,
        issue: IssuesModel,
    ): Promise<AxiosResponse<CreateIssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.createIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<CreateIssueResponse>
                = await issueAPIProvider.createIssue(owner, repo, data)
            return response
        } catch (error) {
            throw new Error(`Create issue is failed ${error}`)
        }
    }
}

export {
    IssueAPIService,
    CreateIssueResponse,
    GetIssueResponse
}