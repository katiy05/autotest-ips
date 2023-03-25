import { IssuesData } from "../data/issues.data"

type IssuesModel = {
    titleIssues: string,
    comment: string,
}

function createIssuesModel(data: IssuesData): IssuesModel {
    return {
        titleIssues: data.titleIssues,
        comment: data.comment,
    }
}

export {
    IssuesModel,
    createIssuesModel,
}