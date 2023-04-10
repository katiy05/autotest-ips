import { IssuesData } from "../data/issues.data"

type IssuesModel = {
    title: string,
    comment?: string
}

function createIssuesModel(data: IssuesData): IssuesModel {
    return {
        title: data.title,
        comment: data.comment,
    }
}

export {
    IssuesModel,
    createIssuesModel,
}