import { UserData } from "../data/user.data"

type UserModel = {
    login: string,
    password: string,
    name?: string,
    bio?: string,
    pronouns: string,
    avatar?: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        password: data.password,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
        avatar: data.avatar,
    }
}

export {
    UserModel,
    createUserModel,
}