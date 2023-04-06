import { UserModel } from '../../../test/user/model/user.model'

type UpdateUserRequest = {
    blog: string,
    name?: string,
    bio?: string
}

class UserAPIDataProvider {
    public static getUpdateUserData(user: UserModel): UpdateUserRequest {
        return {
            blog: 'https://github.com/katiy05',
            name: user.name
        }
    }

    public static getDeletedUserData(): UpdateUserRequest {
        return {
            blog: 'https://github.com/katiy05',
            name: '',
            bio: ''
        }
    }
}

export {
    UpdateUserRequest,
    UserAPIDataProvider,
}
