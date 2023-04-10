import { LoginPage } from '../page-object/Login.page'
import { UserProfileSettingsPage } from '../page-object/UserProfileSettings.page'
import { UserProfilePage } from '../page-object/UserProfile.page'
import { EmailSettingsPage } from '../page-object/EmailSettings.page'
import { createUserModel, UserModel } from '../model/user.model'
import { userData } from '../data/user.data'
import { UserAPIService } from '../../../common/api/api-service/UserAPIService'

const INVALID_FILE_PATH = 'src/files/favicon.ico'
const TEST_MASK = 'user-profile-settings-test'

describe('Update user profile settings test', async () => {
    let loginPage: LoginPage
    let userProfilePage: UserProfilePage
    let userProfileSettingsPage: UserProfileSettingsPage
    let emailSettingsPage: EmailSettingsPage
    const user: UserModel = createUserModel(userData(TEST_MASK))

    before(async () => {
        emailSettingsPage = new EmailSettingsPage(browser)
        loginPage = new LoginPage(browser)
        userProfilePage = new UserProfilePage(browser)
        userProfileSettingsPage = new UserProfileSettingsPage(browser)
        await UserAPIService.deleteAuthenticatedUser()
        await loginPage.open()
        await loginPage.login(user)
    })

    beforeEach(async () => {
        await userProfileSettingsPage.open()
    })

    it(`user name should be update`, async () => {
        await userProfileSettingsPage.setUserName(user.name!)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getUserNameText()).toEqual(user.name)
    })

    it('bio should be update', async () => {
        await userProfileSettingsPage.setBio(user.bio!)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getBioText()).toEqual(user.bio)
    })

    it('Pronouns should be update', async () => {
        await userProfileSettingsPage.setPronouns(user.pronouns)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getPronounsText()).toEqual(user.pronouns)
    })

    it('Public email should be disable', async () => {
        if (!await userProfileSettingsPage.isClickableUserProfileEmail()) {
            await emailSettingsPage.open()
            await emailSettingsPage.submitValueToggle()
            await userProfileSettingsPage.open()
        }
        expect(await userProfileSettingsPage.isClickableUserProfileEmail()).toEqual(true)
    })

    it('photo should be uploaded in profile', async () => {
        await userProfileSettingsPage.uploadFile(user.avatar!)
        await browser.pause(2000)
        await userProfileSettingsPage.submitButtonInstallNewAvatar()
        expect(await userProfileSettingsPage.isDisplayedNoticeUploadAvatar()).toEqual(true)
    })

    it('error uploaded photo in profile', async () => {
        await userProfileSettingsPage.uploadFile(INVALID_FILE_PATH)
        await browser.pause(2000)
        expect(await userProfileSettingsPage.isDisplayedTitleErrorUploadAvatar()).toEqual(true)
    })

    it('Photo in profile should be deleted', async () => {
        await userProfileSettingsPage.removeAvatar()
        await browser.acceptAlert()
        await browser.pause(2000)
        expect(await userProfileSettingsPage.isDisplayedNoticeUploadAvatar()).toEqual(true)
    })

    after(async () => {
        await UserAPIService.deleteAuthenticatedUser()
        if (await userProfileSettingsPage.isClickableUserProfileEmail()) {
            await emailSettingsPage.open()
            await emailSettingsPage.submitValueToggle()
        }
    })
})
