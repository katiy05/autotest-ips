import { UserProfileSettingsData } from "../date/userProfileSettings.date"

type UserProfileSettingsModel = {
    nameUser: string,
    bio: string,
    pronouns: string,
}

function createUserProfileSettingsModel(data: UserProfileSettingsData): UserProfileSettingsModel {
    return {
        nameUser: data.nameUser,
        bio: data.bio,
        pronouns: data.pronouns
    }
}

export {
    UserProfileSettingsModel,
    createUserProfileSettingsModel,
}