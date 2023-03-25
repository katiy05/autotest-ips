import { userData } from '../data/user.data'
import { UserModel, createUserModel } from '../model/user.model'
import { LoginPage } from '../page-object/Login.page'
import { MainPage } from '../page-object/Main.page'

const INVALID_LOGIN: string = 'katiy'
const INVALID_PASSWORD: string = '12345'

describe('Login form test', async () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    let user: UserModel

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
        user = createUserModel(userData)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('User should be logged in', async () => {
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getLoginUserText()).toEqual(user.login)
    })

    it('User not log in incorrect password', async () => {
        await loginPage.setLogin(user.login)
        await loginPage.setPassword(INVALID_PASSWORD)
        await loginPage.submit()
        expect(await loginPage.isIncorrectPasswordError()).toEqual(true)
    })

    it('User not log in incorrect login', async () => {
        await loginPage.setLogin(INVALID_LOGIN)
        await loginPage.setPassword(user.password)
        await loginPage.submit()
        expect(await loginPage.isIncorrectPasswordError()).toEqual(true)
    })

    it('Log in with empty fields', async () => {
        await loginPage.submit()
        expect(await loginPage.isIncorrectPasswordError()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})