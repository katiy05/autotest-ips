import { getDate } from "../../../common/data/getDate"
import { getRandomInteger } from "../../../common/data/getRandomInteger"

type IssuesData = {
    title: string,
    comment: string,
}

const issuesData = (mask: string) => {
    return {
        title: `${mask} ${getDate()} ${getRandomInteger(10000, 100000)}`,
        comment: `${mask} ${getDate()} ${getRandomInteger(10000, 100000)}`,
    }
}

export {
    IssuesData,
    issuesData,
}

