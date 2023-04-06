import { AxiosResponse } from "axios";
import { CreateIssueRequest, IssueAPIDataProvider } from "../api-data-provider/IssueAPIDataProvider";
import { IssueAPIProvider } from "../api-provider/IssueAPIProvider";

class IssueAPIService {
    static createIssueData: any;
    public static async createIssue(
    ): Promise<AxiosResponse<CreateIssueRequest>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.createIssueData('issue-test')
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<CreateIssueRequest>
                = await issueAPIProvider.createIssue(data)
            return response

        } catch (error) {
            throw new Error(`Create issue is failed ${error}`)
        }
    }

    axios.interceptors.response.use((response) => {
    return response
}

export {
    IssueAPIService,
}