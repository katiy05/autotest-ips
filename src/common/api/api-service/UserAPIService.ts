import { AxiosResponse } from "axios";
import { UserModel } from "../../../test/user/model/user.model";
import { UpdateUserRequest, UserAPIDataProvider } from "../api-data-provider/UserAPIDataProvider";
import { UserAPIProvider } from "../api-provider/UserAPIProvider";

class UserAPIService {
    static getUpdateUserData: any;
    public static async updateAuthenticatedUser(
        user: UserModel,
    ): Promise<AxiosResponse<UpdateUserRequest>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getUpdateUserData(user)
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<UpdateUserRequest>
                = await userAPIProvider.updateAuthenticatedUser(data)
            return response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }

    public static async deleteAuthenticatedUser(
    ): Promise<AxiosResponse<UpdateUserRequest>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getDeletedUserData()
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<UpdateUserRequest>
                = await userAPIProvider.updateAuthenticatedUser(data)
            return response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }
}

export {
    UserAPIService,
}