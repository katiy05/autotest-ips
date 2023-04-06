import { getDate } from '../../data/getDate'
import { getRandomInteger } from '../../data/getRandomInteger'

type CreateIssueRequest = {
    title: string,
    body?: string,
    labels?: string
}

class IssueAPIDataProvider {
    public static createIssueData(mask: string): CreateIssueRequest {
        return {
            title: `${mask} ${getDate()} ${getRandomInteger(10000, 100000)}`,
            body: `${mask} ${getDate()} ${getRandomInteger(10000, 100000)}`
        }
    }
}

type GetIssueResponse = {
    htmlUrl: string,
}

class GetUrlIssueAPIDataProvider {
    public static getIssueResponse(): GetIssueResponse {
        return {
            htmlUrl: ''
        }
    }
}

export {
    CreateIssueRequest,
    IssueAPIDataProvider,
    GetUrlIssueAPIDataProvider,
}
