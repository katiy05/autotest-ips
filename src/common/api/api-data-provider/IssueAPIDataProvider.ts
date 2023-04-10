import { IssuesModel } from "../../../test/issues/model/issues.model"

type CreateIssueRequest = {
    title: string | number,
    body?: string,
    labels?: string[],
}

class IssueAPIDataProvider {
    public static createIssueData(issue: IssuesModel): CreateIssueRequest {
        return {
            title: issue.title,
        }
    }
}

export {
    CreateIssueRequest,
    IssueAPIDataProvider,
}
