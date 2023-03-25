import { ChainablePromiseElement } from 'webdriverio'
import { UserProfileSettingsModel } from '../model/userProfileSettings.model'

class UserProfileSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getUserNameText(): Promise<string> {
        await this.getUserNameField().waitForDisplayed({
            timeoutMsg: 'User profile name was not displayed'
        })
        return this.getUserNameField().getText()
    }

    public async isClickableUserProfileEmail(): Promise<boolean> {
        return this.getUserProfileEmailField().isClickable()
    }

    public async isDisplayedTitleErrorUploadAvatar(): Promise<boolean> {
        return this.getTitleErrorUploadAvatar().isDisplayed()
    }

    public async isDisplayedNoticeUploadAvatar(): Promise<boolean> {
        return this.getNoticeUploadAvatar().isDisplayed()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async submitButtonInstallNewAvatar(): Promise<void> {
        await this.getButtonInstallNewAvatar().waitForClickable({
            timeoutMsg: 'Submit button was not clickable'
        })
        await this.getButtonInstallNewAvatar().click()
    }

    public async setBio(nameUser: UserProfileSettingsModel): Promise<void> {
        await this.getBioField().waitForDisplayed({
            timeoutMsg: 'Bio field was not displaed'
        })
        await this.getBioField().setValue(nameUser.bio)
    }

    public async setPronouns(pronouns: UserProfileSettingsModel): Promise<void> {
        await this.getPronounsField().getText()
        await this.getPronounsField().selectByVisibleText(pronouns.pronouns)
    }

    public async setUserName(nameUser: UserProfileSettingsModel): Promise<void> {
        await this.getUserNameField().waitForDisplayed({
            timeoutMsg: 'User profile name field was not displaed'
        })
        await this.getUserNameField().setValue(nameUser.nameUser)
    }

    public async clearUserSettings(userSettings: UserProfileSettingsModel): Promise<void> {
        await this.setUserName(userSettings)
        await this.setBio(userSettings)
        await this.setPronouns(userSettings)
    }

    public async submitUpdateProfile(): Promise<void> {
        await this.getButtonUpdateProfile().waitForClickable({
            timeoutMsg: "Update profile button was not clickable"
        })
        await this.getButtonUpdateProfile().click()
    }

    public async uploadFile(filePath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath)
        await this.getInputFile().setValue(file)
    }

    private getBioField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getButtonInstallNewAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="avatar-crop-form"]//*[@type="submit"]')
    }

    private getButtonUpdateProfile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-target="waiting-form.submit"]')
    }

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    private getNoticeUploadAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
    }

    private getPronounsField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getTitleErrorUploadAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]')
    }

    private getUserNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getUserProfileEmailField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }

    //dfffffffffff
    private getButtonEditAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]//details/summary')
    }

    private getButtonRemoveAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]//details/details-menu/form/button')
    }

    public async submitButtonEditAvatar(): Promise<void> {
        await this.getButtonEditAvatar().waitForClickable({
            timeoutMsg: "Button edit avatar was not clickable"
        })
        await this.getButtonEditAvatar().click()
    }

    public async submitButtonRemoveAvatar(): Promise<void> {
        await this.getButtonRemoveAvatar().waitForClickable({
            timeoutMsg: "Button remove avatar was not clickable"
        })
        await this.getButtonRemoveAvatar().click()
    }

    public async removeAvatar(): Promise<void> {
        await this.submitButtonEditAvatar()
        await this.submitButtonRemoveAvatar()
    }
}

async function showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
    await browser.execute(() => {
        const htmlElement = document.querySelector('[type="file"]') as HTMLElement
        htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
    })
}

export {
    UserProfileSettingsPage
}
