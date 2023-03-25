import { LoginPage } from '../../login/page-object/Login.page'
import { UserProfileSettingsPage } from '../page-object/UserProfileSettings.page'
import { UserProfilePage } from '../page-object/UserProfile.page'
import { EmailSettingsPage } from '../page-object/EmailSettings.page'
import { createUserModel, UserModel } from '../../login/model/user.model'
import { userData } from '../../login/data/user.data'
import { createUserProfileSettingsModel, UserProfileSettingsModel } from '../model/userProfileSettings.model'
import { userProfileSettingsData, clearUserProfileSettingsData } from '../date/userProfileSettings.date'


describe('Update user profile settings test', async () => {
    let loginPage: LoginPage
    let userProfilePage: UserProfilePage
    let userProfileSettingsPage: UserProfileSettingsPage
    let emailSettingsPage: EmailSettingsPage
    let user: UserModel
    let settingsUser: UserProfileSettingsModel
    let clearUserSettings: UserProfileSettingsModel

    const FILE_PATH = 'src/files/file.jpg'

    before(async () => {
        userProfileSettingsPage = new UserProfileSettingsPage(browser)
        userProfilePage = new UserProfilePage(browser)
        loginPage = new LoginPage(browser)
        emailSettingsPage = new EmailSettingsPage(browser)
        user = createUserModel(userData)
        settingsUser = createUserProfileSettingsModel(userProfileSettingsData)
        clearUserSettings = createUserProfileSettingsModel(clearUserProfileSettingsData)

        await loginPage.open()
        await loginPage.login(user)
    })

    beforeEach(async () => {
        await userProfileSettingsPage.open()
    })

    it.only(`user name should be update`, async () => {
        await userProfileSettingsPage.setUserName(settingsUser)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getUserNameText()).toEqual(settingsUser.nameUser)
    })

    it.only('bio should be update', async () => {
        await userProfileSettingsPage.setBio(settingsUser)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getBioText()).toEqual(settingsUser.bio)
    })

    it('Pronouns should be update', async () => {
        await userProfileSettingsPage.setPronouns(settingsUser)
        await userProfileSettingsPage.submitUpdateProfile()
        await userProfilePage.open()
        expect(await userProfilePage.getPronounsText()).toEqual(settingsUser.pronouns)
    })

    it('Public email should be disable', async () => {
        if (await userProfileSettingsPage.isClickableUserProfileEmail() === false) {
            await emailSettingsPage.open()
            await emailSettingsPage.submitValueToggle()
            await userProfileSettingsPage.open()
        }
        expect(await userProfileSettingsPage.isClickableUserProfileEmail()).toEqual(true)
    })

    it('photo should be uploaded in profile', async () => {
        await userProfileSettingsPage.uploadFile(FILE_PATH)
        await browser.pause(2000)
        await userProfileSettingsPage.submitButtonInstallNewAvatar()
        expect(await userProfileSettingsPage.isDisplayedNoticeUploadAvatar()).toEqual(true)
    })

    it('error uploaded photo in profile', async () => {
        const filePath = 'src/files/favicon.ico'
        await userProfileSettingsPage.uploadFile(filePath)
        await browser.pause(2000)
        expect(await userProfileSettingsPage.isDisplayedTitleErrorUploadAvatar()).toEqual(true)
    })

    // it('error uploaded photo in profile', async () => {
    //     await userProfileSettingsPage.removeAvatar()
    //     await browser.keys('Enter')
    //     await browser.pause(2000)
    //     expect(await userProfileSettingsPage.isDisplayedNoticeUploadAvatar()).toEqual(true)
    // })

    // after(async () => {
    //     await userProfileSettingsPage.open()
    //     await userProfileSettingsPage.clearUserSettings(clearUserSettings)
    //     await userProfileSettingsPage.submitUpdateProfile()
    //     if (await userProfileSettingsPage.isClickableUserProfileEmail() === true) {
    //         await emailSettingsPage.open()
    //         await emailSettingsPage.submitValueToggle()
    //         await userProfileSettingsPage.open()
    //     }
    // })
})
