import { GitAPIProvider } from './GitAPIProvider'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'


class IssueAPIProvider extends GitAPIProvider {
    public createIssue<T>(owner: string, repo: string, data: CreateIssueRequest):
        Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            `/repos/${owner}/${repo}/issues`,
            'POST',
            this.headers,
            JSON.stringify(data)
        )
        return this.sendRequest(apiRequest)
    }

    public getIssues<T>(owner: string, repo: string):
        Promise<AxiosResponse<T>> {
        const apiRequestGet: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            `/repos/${owner}/${repo}/issues`,
            'GET',
            this.headers,
        )
        return this.sendRequest(apiRequestGet)
    }

}

export {
    IssueAPIProvider,
}