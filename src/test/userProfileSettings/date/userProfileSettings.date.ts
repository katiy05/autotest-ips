function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomString(length: number): string {
    //var randomString = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var rndString = ''
    while (rndString.length < length)
        rndString += abc[Math.floor(Math.random() * abc.length)]
    return rndString.substring(0, length)
}

function getDate(): number {
    return new Date().getTime()
}

enum PronounsOptions {
    OPTION_1 = "Don't specify",
    OPTION_2 = 'they/them',
    OPTION_3 = 'she/her',
    OPTION_4 = 'he/him',
    OPTION_5 = 'Custom'
}

type UserProfileSettingsData = {
    nameUser: string,
    bio: string,
    pronouns: string,
}

const userProfileSettingsData: UserProfileSettingsData = {
    //nameUser: 'Ekaterina Nikolaeva',
    nameUser: `${getRandomString(5)}+${getRandomInteger(10000, 100000)}+${getDate()}`,
    // bio: 'Tell a little bit about yourself',
    bio: `${getRandomString(5)}+${getDate()}+${getRandomInteger(10000, 100000)}`,
    pronouns: PronounsOptions.OPTION_3,
}


const clearUserProfileSettingsData: UserProfileSettingsData = {
    nameUser: '',
    bio: '',
    pronouns: PronounsOptions.OPTION_1,
}

// const otherUserProfileSettingsData: UserProfileSettingsData = {
//     nameUser: `${randomString} ${date} ${randomInteger}`,
//     bio: 'Tell a little bit about yourself',
//     pronouns: PronounsOptions.OPTION_3,
// }

export {
    UserProfileSettingsData,
    userProfileSettingsData,
    clearUserProfileSettingsData,
    getDate,
    getRandomInteger,
    getRandomString,
}

