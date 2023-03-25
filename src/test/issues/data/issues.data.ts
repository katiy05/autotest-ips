import { getDate, getRandomInteger } from "../../userProfileSettings/date/userProfileSettings.date"

type IssuesData = {
    titleIssues: string,
    comment: string,
}

const newIssuesData: IssuesData = {
    titleIssues: `Замечания по практике ${getDate()} + ${getRandomInteger(10000, 100000)}`,
    comment: `Поправить текст ${getDate()} + ${getRandomInteger(10000, 100000)}`,
}

const editIssuesData: IssuesData = {
    titleIssues: `Практика ${getDate()} + ${getRandomInteger(10000, 100000)}`,
    comment: `Текст ${getDate()} + ${getRandomInteger(10000, 100000)}`,

}

export {
    IssuesData,
    newIssuesData,
    editIssuesData,
}

