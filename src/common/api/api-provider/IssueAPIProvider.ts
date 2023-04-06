import { GitAPIProvider } from './GitAPIProvider'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'

class IssueAPIProvider extends GitAPIProvider {
    public createIssue<T>(data: CreateIssueRequest):
        Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            '/repos/katiy05/autotest-lesson1/issues',
            'POST',
            this.headers,
            JSON.stringify(data)
        )
        return this.sendRequest(apiRequest)
    }

    public getURLIssue<T>(data: CreateIssueRequest):
        Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            '/repos/katiy05/autotest-lesson1/issues',
            'POST',
            this.headers,
            JSON.stringify(data)
        )
        return this.sendRequest(apiRequest)
    }
}

export {
    IssueAPIProvider,
}