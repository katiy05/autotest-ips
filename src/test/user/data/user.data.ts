import { getDate } from "../../../common/data/getDate"
import { getRandomInteger } from "../../../common/data/getRandomInteger"
import { getRandomString } from "../../../common/data/getRandomString"
import { LOGIN, PASSWORD } from "../../../../credential"

enum PronounsOptions {
    OPTION_1 = "Don't specify",
    OPTION_2 = 'they/them',
    OPTION_3 = 'she/her',
    OPTION_4 = 'he/him',
    OPTION_5 = 'Custom'
}

type UserData = {
    login: string,
    password: string,
    name?: string,
    bio?: string,
    pronouns: string,
    avatar?: string,
}

const userData = (mask: string, data?: Partial<UserData>) => {
    return {
        login: LOGIN,
        password: PASSWORD,
        name: data?.name ?? `${mask} ${getRandomString(5)} ${getDate()} ${getRandomInteger(10000, 100000)}`,
        bio: data?.name ?? `${mask} ${getRandomString(5)} ${getDate()} ${getRandomInteger(10000, 100000)}`,
        pronouns: PronounsOptions.OPTION_3,
        avatar: 'src/files/file.jpg'

    }
}

export {
    UserData,
    userData,
}